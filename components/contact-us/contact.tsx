"use client"

import React, { useEffect, useRef, useState } from "react"
import toast, { Toast } from "react-hot-toast"
import AnimatedButton from "./animatedButton"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/ui/button"
import { FaArrowRightArrowLeft } from "react-icons/fa6"
import { ArrowUpRightFromSquareIcon } from "lucide-react"
import { useRouter } from "next/navigation"

const budgetOptions = [
  { label: "<50K", value: "< 50K" },
  { label: "50K - 100K", value: "50K - 100K" },
  { label: ">100K", value: "> 100K" },
]
interface InputErrors {
  name?: string
  email?: string
  message?: string
  phone?: string
}

interface FormDetails {
  name: string
  email: string
  phone: string
  message: string
}

let defaultFormDetails = {
  name: "",
  email: "",
  phone: "",
  message: "",
}

const ContactForm = () => {
  let [formDetails, setFormDetails] = React.useState<FormDetails>({
    ...defaultFormDetails,
  })
  const router = useRouter()
  const url = process.env.NEXT_PUBLIC_SERVER_URL
  // console.log("url: ", url)
  let [loading, setLoading] = React.useState<boolean>(false)
  let [formError, setFormError] = React.useState<InputErrors>({})

  const [activeButton, setActiveButton] = useState<string | null>(null)

  const handleButtonClick = (budget: string) => {
    setActiveButton(budget)
  }

  const [focusedInput, setFocusedInput] = useState<string | null>(null)

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    updateErrorState(event)
    if (event.target.id === "phone") {
      const regex = /^[0-9+()\s-]*$/

      if (
        event.target.value.startsWith(" ") ||
        /\s{2,}/.test(event.target.value) ||
        !regex.test(event.target.value)
      ) {
        return
      }
    }
    setFormDetails({
      ...formDetails,
      [event.target.id]: event.target.value,
    })
  }

  const onFocus = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    updateErrorState(event)
  }

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { name, phone, email, message } = formDetails

    setFormError({})
    setLoading(true)

    let isError = false
    if (!name) {
      setFormError((prev) => ({ ...prev, name: `Name is required` }))
      isError = true
    }
    if (!email) {
      setFormError((prev) => ({ ...prev, email: `Email is required` }))
      isError = true
    }
    if (!message) {
      setFormError((prev) => ({ ...prev, message: `Message is required` }))
      isError = true
    }
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      setFormError((prev) => ({ ...prev, email: `Email is invalid` }))
      isError = true
    }

    if (isError) {
      setLoading(false)
      return
    }

    try {
      const contactFormResponse = await fetch(`${url}/api/contact-forms`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            name,
            phoneNumber: phone,
            email,
            feedback: message,
            viewed: false,
          },
        }),
      })

      if (contactFormResponse.ok) {
        setFormDetails({ ...defaultFormDetails })
        toast.success(
          "We have received your message. We will get back to you soon.",
          {
            duration: 4000,
            position: "bottom-center",
          }
        )
        router.push("/")
      } else {
        toast.error("Failed to save your contact form. Please try again later.")
      }
    } catch (err) {
      console.error(err)
      toast.error("Something went wrong. Please try again later.")
    }

    setLoading(false)
  }
  const updateErrorState = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormError((prev) => ({ ...prev, [event.target.id]: "" }))
  }

  return (
    <div className="web-container my-20">
      {/* <Toast /> */}
      <div className="flex flex-col md:flex-row gap-10 justify-between items-baseline">
        <div className="w-full lg:w-[33%]">
          <div className="text-justify text-base xs:text-lg md:text-xl lg:text-2xl 3xl:text-[34px]/[46px] font-aeonik font-normal text-gray-800 dark:text-gray-200">
            {" "}
            {/* Added dark mode text color */}
            Whether you’re ready to launch a new project or just testing the
            waters, we’re all ears and eager to connect. Share your goals,
            questions, or suggestions with us - no message is too small. Let’s
            start a conversation that could spark something extraordinary!
          </div>
        </div>
        <div className="lg:flex-1 w-full pl-[auto] max-w-[650px] 3xl:max-w-[800px]">
          <form onSubmit={submitForm} className="space-y-6 lg:space-y-12">
            <CustomInput
              id="name"
              type="text"
              placeholder="Name*"
              value={formDetails.name}
              onChange={handleInputChange}
              onFocus={onFocus}
              error={formError.name}
            />
            <CustomInput
              id="phone"
              type="text"
              placeholder="Phone No."
              value={formDetails.phone}
              onChange={handleInputChange}
              onFocus={onFocus}
              error={formError.phone}
            />
            <CustomInput
              id="email"
              type="email"
              placeholder="Email*"
              value={formDetails.email}
              onChange={handleInputChange}
              onFocus={onFocus}
              error={formError.email}
            />
            <CustomInput
              id="message"
              type="message"
              placeholder="What’s on your mind?*"
              value={formDetails.message}
              onChange={handleInputChange}
              onFocus={onFocus}
              error={formError.message}
              textArea={true}
            />
            <div className="space-y-6">
              <div className="flex flex-col lg:flex-row gap-10">
                <div className=" lg:ml-auto group ">
                  <Button variant={"blue"} className=" w-full mx-4">
                    {loading ? "Sending..." : "Send"}
                  </Button>
                  {/* <AnimatedButton
                    text={loading ? "Sending..." : "Send"}
                    disabled={loading}
                    finalArrowTranslate={50}
                    initialTextTranslate={-50}
                    finalTextTranslate={0}
                  ></AnimatedButton> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

interface CustomInputProps {
  id: string
  type: string
  placeholder: string
  value: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: String
  onFocus?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  textArea?: boolean
}

const CustomInput = ({
  id,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  onFocus,
  textArea = false,
}: CustomInputProps) => {
  return (
    <div>
      {textArea ? (
        <textarea
          id={id}
          className={cn(
            "border-b py-2 focus:outline-none placeholder-text-inactive focus:border-primary focus:placeholder-opacity-40 w-full px-4 rounded",
            "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 dark:focus:border-blue-400", // Dark mode styles
            {
              "border-danger dark:border-danger": error, // Keep danger red for errors in dark mode too
            }
          )}
          // Remove inline style, let Tailwind handle it
          // style={{ background: "rgb(240, 241, 250)" }}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      ) : (
        <input
          type={type}
          id={id}
          className={cn(
            "border-b py-2 focus:outline-none placeholder-text-inactive focus:border-primary focus:placeholder-opacity-40 w-full px-4 rounded",
            "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 dark:focus:border-blue-400", // Dark mode styles
            {
              "border-danger dark:border-danger": error, // Keep danger red for errors in dark mode too
            }
          )}
          // Remove inline style, let Tailwind handle it
          // style={{ background: "rgb(240, 241, 250)" }}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      )}

      {error && (
        <div className="flex items-center mt-1">
          <p className="text-danger text-xs dark:text-danger-light">
            {" "}
            {error}{" "}
          </p>{" "}
          {/* Optional: A lighter red for dark mode errors */}
        </div>
      )}
    </div>
  )
}

export default ContactForm
