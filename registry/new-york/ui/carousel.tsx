"use client"
import { FaArrowRightLong } from "react-icons/fa6";
import { useState, useRef, useId, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";

interface CarouselProps {
    slides: SlideData[];
}
interface CarouselControlProps {
    type: string;
    title: string;
    handleClick: () => void;
}
interface SlideData {
    title: string;
    button: string;
    src: string;
    link:string;
}

interface SlideProps {
    slide: SlideData;
    index: number;
    current: number;
    handleSlideClick: (index: number) => void;
    parentRef: React.RefObject<HTMLUListElement>;
}


const Carousel = ({ slides }: CarouselProps) => {
    const [current, setCurrent] = useState(0);
    const parentRef = useRef<HTMLUListElement>(null)

    const handlePreviousClick = () => {
        const previous = current - 1;
        const newCurrent = previous < 0 ? slides.length - 1 : previous;

        const parent = parentRef.current?.childNodes;
        if (!parent) return;

        const tl = gsap.timeline();
        const prevSlide = parent[newCurrent].childNodes[0] as Element;

        // Animate active slide: 0.4 sec from { scale: 0.98, rotateX: 8 } to { scale: 1, rotateX: 0 }
        tl.fromTo(
            prevSlide,
            { scale: 0.98, rotateX: 8 },
            { scale: 1, rotateX: 0, duration: 0.4, ease: "power2.out" }
        );

        // Animate the translation of the slides container over 0.3 sec
        const ulEl = parentRef.current;
        if (ulEl) {
            gsap.to(ulEl, {
                duration: 0.3,
                x: `-${newCurrent * (100 / slides.length)}%`,
                ease: "power2.out",
            });
        }

        // Animate remaining slides to maintain their state
        for (let i = 0; i < parent.length; i++) {
            if (i !== newCurrent) {
                const slideElement = (parent[i] as Element).childNodes[0] as Element;
                gsap.to(slideElement, {
                    scale: 0.98,
                    rotateX: 8,
                    duration: 0.4,
                    ease: "power2.out",
                });
            }
        }

        setCurrent(newCurrent);
    };

    const handleNextClick = () => {
        const next = current + 1;
        const newCurrent = next === slides.length ? 0 : next;

        const parent = parentRef.current?.childNodes;
        if (!parent) return;

        const tl = gsap.timeline();
        const nextSlide = parent[newCurrent].childNodes[0] as Element;

        // Animate active slide: 0.3 sec tween then hold for 0.7 sec
        tl.fromTo(
            nextSlide,
            { scale: 0.98, rotateX: 8 },
            { scale: 1, rotateX: 0, duration: 0.4, ease: "power2.out" }
        )
        // .to(nextSlide, { duration: 0.4 });

        // Animate the translation of the slides container over 1 sec
        const ulEl = parentRef.current;
        if (ulEl) {
            gsap.to(ulEl, {
                duration: 0.3,
                x: `-${newCurrent * (100 / slides.length)}%`,
                ease: "power2.out",
            });
        }

        // Animate remaining slides to maintain their state
        for (let i = 0; i < parent.length; i++) {
            if (i !== newCurrent) {
                const slideElement = (parent[i] as Element).childNodes[0] as Element;
                gsap.to(slideElement, {
                    scale: 0.98,
                    rotateX: 8,
                    duration: 0.4,
                    ease: "power2.out",
                });
            }
        }

        setCurrent(newCurrent);
    };


    const handleSlideClick = (index: number) => {
        if (current !== index) {
            setCurrent(index);
        }
    };

    const id = useId();

    return (
        <div
            className="relative w-[70vmin] h-[70vmin] mx-auto"
            aria-labelledby={`carousel-heading-${id}`}
        >
            <ul
                ref={parentRef}
                className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
                style={{
                    transform: `translateX(-${current * (100 / slides.length)}%)`,
                }}
            >
                {slides.map((slide, index) => (
                    <Slide
                        key={index}
                        slide={slide}
                        index={index}
                        current={current}
                        handleSlideClick={handleSlideClick}
                        parentRef={parentRef}
                    />
                ))}
            </ul>

            <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
                <CarouselControl
                    type="previous"
                    title="Go to previous slide"
                    handleClick={handlePreviousClick}
                />

                <CarouselControl
                    type="next"
                    title="Go to next slide"
                    handleClick={handleNextClick}
                />
            </div>
        </div>
    );
}
export { Carousel }


const Slide = ({ slide, index, current, handleSlideClick, parentRef, }: SlideProps) => {
    const slideRef = useRef<HTMLLIElement>(null);
    const xRef = useRef(0);
    const yRef = useRef(0);
    const imageRef = useRef<HTMLImageElement>(null);
    const divRef = useRef<HTMLDivElement>(null)
    const divRef2 = useRef<HTMLDivElement>(null)

    const { src, button, title,link } = slide;

    useEffect(() => {
        if (current !== index) {
            gsap.to(slideRef.current, {
                scale: 0.98,
                rotateX: 8,
                duration: 0.5,
                ease: "power2.out",
            });
            gsap.to(imageRef.current, {
                opacity: 0.5,
                duration: 0.6,
            });
        }
    }, [current, index]);


    const handleMouseMove = (event: React.MouseEvent) => {
        if (current !== index) return;
        const el = slideRef.current;
        const img = divRef2.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const x = event.clientX - (rect.left + rect.width / 2);
        const y = event.clientY - (rect.top + rect.height / 2);

        xRef.current = x / 20;
        yRef.current = y / 20;

        gsap.to(img, {
            x: xRef.current,
            y: yRef.current,
            duration: 0.2,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = () => {
        const img = divRef2.current;
        if (!img) return;
        gsap.to(img, {
            x: 0,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    return (
        <div className="[perspective:1200px] [transform-style:preserve-3d]">
            <li
                ref={slideRef}
                className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10"
                onClick={() => handleSlideClick(index)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <div ref={divRef2} className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%]  transition-all duration-150 ease-out">
                    <img
                        ref={imageRef}
                        className="absolute h-full w-full inset-0 rounded-[1%]  object-cover opacity-100 transition-opacity duration-600 ease-in-out"
                        alt={title}
                        src={src}
                        loading="eager"
                        decoding="sync"
                    />
                    {current === index && (
                        <div ref={divRef} className="absolute inset-0 bg-black/30 transition-all duration-1000" />
                    )}
                </div>

                <article
                    className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${current === index ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                >
                    <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold relative">
                        {title}
                    </h2>
                    <div className="flex justify-center">
                        <Link href={link}>
                        <button  className="mt-6 px-4 py-2 w-fit mx-auto sm:text-sm text-black bg-white h-12 border border-transparent text-xs flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                            {button}
                        </button>
                        </Link>
                    </div>
                </article>
            </li>
        </div>
    );
};

const CarouselControl = ({
    type,
    title,
    handleClick,
}: CarouselControlProps) => {
    return (
        <button
            className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${type === "previous" ? "rotate-180" : ""
                }`}
            title={title}
            onClick={handleClick}
        >
            <FaArrowRightLong className="text-neutral-600 dark:text-neutral-200" />
        </button>
    );
};