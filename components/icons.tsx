type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="20"
      viewBox="0 0 1436 167"
      fill="none"
    >
      <path d="M1399.4 164.4V0H1435.16V164.4H1399.4Z" fill="currentColor" />
      <path
        d="M1248.33 165.55C1232.09 165.55 1219.27 163.404 1209.88 159.112C1200.49 154.666 1193.79 147.998 1189.76 139.108C1185.74 130.217 1183.73 119.027 1183.73 105.538V0H1219.49V105.538C1219.49 117.188 1222.1 125.159 1227.32 129.451C1232.68 133.589 1241.7 135.659 1254.36 135.659H1297.5C1310.17 135.659 1319.11 133.589 1324.33 129.451C1329.69 125.159 1332.37 117.188 1332.37 105.538V0H1368.14V105.538C1368.14 119.027 1366.13 130.217 1362.1 139.108C1358.08 147.998 1351.37 154.666 1341.99 159.112C1332.6 163.404 1319.78 165.55 1303.54 165.55H1248.33Z"
        fill="currentColor"
      />
      <path
        d="M64.4755 166.381C48.2637 166.381 35.4727 164.225 26.1025 159.911C16.7324 155.443 10.0394 148.742 6.02366 139.807C2.00789 130.871 0 119.625 0 106.068V0H35.6958V106.068C35.6958 117.776 38.2986 125.787 43.5042 130.101C48.8586 134.261 57.8569 136.34 70.4992 136.34H113.557C126.199 136.34 135.123 134.261 140.329 130.101C145.683 125.787 148.361 117.776 148.361 106.068V0H184.056V106.068C184.056 119.625 182.048 130.871 178.033 139.807C174.017 148.742 167.324 155.443 157.954 159.911C148.584 164.225 135.793 166.381 119.581 166.381H64.4755Z"
        fill="currentColor"
      />
      <path
        d="M210.793 165.226V0H246.935L359.823 118.778V0H395.519V165.226H359.377L246.489 46.2171V165.226H210.793Z"
        fill="currentColor"
      />
      <path
        d="M424.471 165.226V0H460.167V165.226H424.471Z"
        fill="currentColor"
      />
      <path
        d="M482.433 165.226V137.265L602.237 30.5033H487.565V0.462165H653.996V28.4235L533.969 135.185H653.55V165.226H482.433Z"
        fill="currentColor"
      />
      <path
        d="M989.183 165.226V106.299L904.628 0H948.802L1007.03 74.8717L1065.04 0H1109.21L1025.1 106.068V165.226H989.183Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M681.731 41.8054V159.349C681.731 162.875 684 165.226 687.405 165.226H823.582C826.986 165.226 830.618 163.11 832.433 160.289L848.774 134.9C850.59 132.079 854.221 129.963 857.626 129.963H880.322C883.727 129.963 885.996 127.612 885.996 124.086V6.54243C885.996 3.01612 883.727 0.665253 880.322 0.665253H744.145C740.741 0.665253 737.109 2.78103 735.294 5.60208L718.952 30.9914C717.137 33.8125 713.505 35.9283 710.101 35.9283H687.405C684 35.9283 681.731 38.2791 681.731 41.8054ZM715.775 100.154L808.417 35.9283H721.449C718.045 35.9283 715.775 38.2791 715.775 41.8054V100.154ZM745.311 129.963H846.278C849.682 129.963 851.952 127.612 851.952 124.086V56.0329L745.311 129.963Z"
        fill="currentColor"
      />
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg
      {...props}
      height="23"
      viewBox="0 0 1200 1227"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  radix: (props: IconProps) => (
    <svg viewBox="0 0 25 25" fill="none" {...props}>
      <path
        d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
        fill="currentcolor"
      ></path>
      <path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
      <path
        d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
        fill="currentcolor"
      ></path>
    </svg>
  ),
  aria: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z" />
    </svg>
  ),
  npm: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"
        fill="currentColor"
      />
    </svg>
  ),
  yarn: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z"
        fill="currentColor"
      />
    </svg>
  ),
  pnpm: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"
        fill="currentColor"
      />
    </svg>
  ),
  react: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
        fill="currentColor"
      />
    </svg>
  ),
  tailwind: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
        fill="currentColor"
      />
    </svg>
  ),
  google: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  apple: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
        fill="currentColor"
      />
    </svg>
  ),
  paypal: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
        fill="currentColor"
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  reactjs: (props: IconProps) => (
    <svg
      width="27"
      height="30"
      viewBox="0 0 27 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.01617 15.0005C8.01617 7.63651 10.4028 1.66718 13.3495 1.66718C16.2962 1.66718 18.6828 7.63651 18.6828 15.0005C18.6828 22.3645 16.2962 28.3338 13.3495 28.3338C10.4028 28.3338 8.01617 22.3645 8.01617 15.0005Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6502 10.4935C17.1062 6.81083 23.5489 5.8935 25.0395 8.44416C26.5302 10.9948 22.5062 16.0482 16.0502 19.7295C9.59423 23.4108 3.15157 24.3295 1.6609 21.7775C0.170234 19.2268 4.19423 14.1762 10.6502 10.4935Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0502 10.4935C22.5062 14.1735 26.5302 19.2268 25.0395 21.7775C23.5489 24.3295 17.1062 23.4122 10.6502 19.7295C4.19423 16.0468 0.170234 10.9962 1.6609 8.44416C3.15023 5.8935 9.59423 6.81083 16.0502 10.4935Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.3494 15.0012C15.3494 15.5316 15.1386 16.0403 14.7636 16.4154C14.3885 16.7904 13.8798 17.0012 13.3494 17.0012C12.8189 17.0012 12.3102 16.7904 11.9352 16.4154C11.5601 16.0403 11.3494 15.5316 11.3494 15.0012C11.3494 14.4707 11.5601 13.962 11.9352 13.5869C12.3102 13.2119 12.8189 13.0012 13.3494 13.0012C13.8798 13.0012 14.3885 13.2119 14.7636 13.5869C15.1386 13.962 15.3494 14.4707 15.3494 15.0012Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  nextjs: (props: IconProps) => (
    <svg
      width="29"
      height="28"
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.3283 21.7361L12.045 8.33333H8.90608V19.4444H11.6839V12.425L20.138 23.4431C17.7091 24.8882 14.8207 25.3534 12.0608 24.744C9.30097 24.1346 6.87708 22.4963 5.28258 20.1626C3.68809 17.829 3.04284 14.9754 3.47818 12.1828C3.91353 9.39019 5.39674 6.86844 7.6259 5.13088C9.85507 3.39332 12.6626 2.57057 15.477 2.83011C18.2914 3.08965 20.9011 4.41198 22.7749 6.52791C24.6487 8.64384 25.6458 11.3943 25.563 14.2195C25.4803 17.0446 24.3241 19.7321 22.3297 21.7347M14.4616 27.7778C22.1325 27.7778 28.3505 21.5597 28.3505 13.8889C28.3505 6.21806 22.1325 0 14.4616 0C6.79081 0 0.572754 6.21806 0.572754 13.8889C0.572754 21.5597 6.79081 27.7778 14.4616 27.7778ZM17.2394 13.8889V8.33333H20.0172V13.8889H17.2394Z"
        fill="currentColor"
      />
    </svg>
  ),
  typescript: (props: IconProps) => (
    <svg
      width="29"
      height="28"
      viewBox="0 0 29 28"
      // fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_512_177)">
        <path
          d="M24.3727 0H4.77275C2.45316 0 0.572754 1.8804 0.572754 4.2V23.8C0.572754 26.1196 2.45316 28 4.77275 28H24.3727C26.6923 28 28.5727 26.1196 28.5727 23.8V4.2C28.5727 1.8804 26.6923 0 24.3727 0Z"
          fill="#7E7E7E"
        />
        <path
          d="M13.3149 15.5309H16.8149V13.2887H7.02588V15.5309H10.5259V25.5387H13.3149V15.5309ZM17.9087 24.9918C18.3517 25.2215 18.8931 25.391 19.4946 25.5059C20.0962 25.6207 20.7524 25.6754 21.4087 25.6754C22.0649 25.6754 22.6665 25.6152 23.2681 25.4895C23.8696 25.3637 24.3618 25.1559 24.7993 24.8879C25.2423 24.5981 25.6196 24.2316 25.8384 23.7395C26.0571 23.2473 26.2266 22.7004 26.2266 21.9895C26.2266 21.4918 26.1501 21.0598 26.0024 20.677C25.8548 20.2941 25.6415 19.966 25.3462 19.6926C25.0673 19.4027 24.7446 19.1457 24.3618 18.927C23.979 18.7082 23.5415 18.4785 23.0493 18.2707C22.6884 18.1231 22.3931 17.9809 22.0649 17.8387C21.7806 17.6965 21.5345 17.5543 21.354 17.4121C21.1517 17.2645 20.9985 17.1113 20.8892 16.9527C20.7798 16.7887 20.7251 16.6082 20.7251 16.4059C20.7251 16.2199 20.7738 16.0504 20.8727 15.8973C20.9717 15.7442 21.1079 15.6184 21.2829 15.509C21.4579 15.3996 21.6767 15.3176 21.9392 15.2574C22.1962 15.1973 22.4806 15.1699 22.8142 15.1699C23.0438 15.1699 23.2845 15.1869 23.5251 15.2213C23.7767 15.2558 24.0337 15.3088 24.2907 15.3799C24.5477 15.451 24.7993 15.5385 25.0563 15.6479C25.297 15.7573 25.5212 15.8831 25.7126 16.0252V13.4549C25.297 13.2963 24.8376 13.176 24.3454 13.0995C23.8532 13.0229 23.3063 12.9846 22.6501 12.9846C21.9938 12.9846 21.3923 13.0557 20.7907 13.1924C20.1892 13.3292 19.697 13.5479 19.2595 13.8487C18.8165 14.144 18.4938 14.5049 18.2204 14.9971C17.9634 15.4565 17.8376 15.9815 17.8376 16.6377C17.8376 17.4581 18.0727 18.169 18.5485 18.7159C19.0188 19.3174 19.7517 19.7549 20.6813 20.1924C21.0587 20.3456 21.3923 20.4987 21.7204 20.6463C22.0485 20.794 22.322 20.9471 22.5407 21.1057C22.7759 21.2643 22.9618 21.4393 23.0876 21.6252C23.2243 21.8112 23.2954 22.0299 23.2954 22.2815C23.2954 22.4565 23.2527 22.6206 23.1696 22.7737C23.0865 22.9268 22.9563 23.0581 22.7813 23.1674C22.6063 23.2768 22.3931 23.3643 22.1251 23.4299C21.8681 23.4901 21.5782 23.5229 21.1954 23.5229C20.5938 23.5229 19.9923 23.419 19.4454 23.2112C18.8438 23.0034 18.297 22.6916 17.9087 22.3668V24.9918Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_512_177">
          <rect
            width="28"
            height="28"
            fill="currentColor"
            transform="translate(0.572754)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  gsap: (props: IconProps) => (
    <svg
      width="76"
      height="28"
      viewBox="0 0 76 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.53845 7.42702C8.97429 8.11149 8.54689 8.87908 8.17767 9.67979C7.87898 10.3312 7.59684 10.9867 7.36041 11.6629C7.09483 12.4305 6.87495 13.2105 6.70893 14.0071C6.44755 15.2351 6.33562 16.4757 6.35218 17.7286C6.36046 18.5085 6.40616 19.2885 6.63432 20.0436C6.81269 20.6328 7.08655 21.1639 7.6134 21.5289C8.02832 21.8153 8.48464 21.8981 8.9701 21.8608C10.1359 21.7778 11.0072 21.1722 11.6876 20.2594C12.1273 19.6702 12.4552 19.0188 12.6543 18.3094C12.6751 18.2389 12.6916 18.1601 12.6958 18.0853C12.7041 17.9319 12.6335 17.8572 12.4717 17.8614C11.9947 17.8655 11.5175 17.8655 11.0404 17.8614C10.613 17.8572 10.4346 17.6581 10.5259 17.2473C10.7085 16.4217 10.9034 15.596 11.0902 14.7705C11.2105 14.2352 11.3391 13.7 11.4469 13.1607C11.5341 12.7251 11.725 12.5549 12.1688 12.5549C15.2349 12.5549 18.3051 12.5549 21.371 12.5549C21.5204 12.5549 21.6739 12.5259 21.8067 12.6379C21.9643 12.7749 22.0473 12.9283 22.0016 13.1441C21.7652 14.1937 21.5328 15.2393 21.2964 16.2889C21.2134 16.6498 21.1304 17.0108 21.0433 17.3759C20.9645 17.7036 20.7654 17.8572 20.421 17.8614C20.0766 17.8614 19.7281 17.8737 19.3837 17.8572C19.168 17.8489 19.0725 17.9443 19.0145 18.1351C18.8859 18.5708 18.7573 19.0065 18.6037 19.4338C18.4087 19.9814 18.2013 20.5332 17.9689 21.0684C17.579 21.9646 17.1267 22.8316 16.5832 23.6448C15.629 25.068 14.4383 26.2254 12.8825 26.9723C12.1025 27.3457 11.2768 27.5863 10.4222 27.7315C9.43889 27.9016 8.44733 27.9556 7.45158 27.9223C6.07005 27.8767 4.7798 27.5199 3.64717 26.715C2.73023 26.0678 1.99178 25.2464 1.43159 24.2714C0.921301 23.3959 0.572826 22.4417 0.357028 21.4543C0.0335026 19.9773 -0.0619773 18.4795 0.0375865 16.9694C0.116398 15.7496 0.278217 14.5381 0.51057 13.3391C0.693142 12.4015 0.933774 11.4763 1.21591 10.5593C1.60169 9.31057 2.08715 8.09913 2.68453 6.93736C3.0829 6.16569 3.53922 5.43132 4.0579 4.73017C4.7798 3.75517 5.60126 2.87565 6.57206 2.14548C7.65082 1.3323 8.83323 0.7348 10.1442 0.402996C11.4304 0.0751611 12.7373 -0.00364906 14.0525 0.153975C15.4091 0.315795 16.6414 0.792976 17.6827 1.7098C18.5084 2.43998 19.085 3.34036 19.4917 4.36095C20.089 5.85872 20.2426 7.4311 20.2924 9.02015C20.3048 9.39766 20.1638 9.68807 19.6368 9.68399C17.8321 9.66732 16.0314 9.67979 14.2267 9.67979C13.8699 9.67979 13.7744 9.5927 13.7496 9.23584C13.7123 8.69232 13.6791 8.14891 13.5215 7.62195C13.3306 6.98714 13.0318 6.42707 12.3349 6.23214C11.8204 6.08687 11.3142 6.17396 10.8246 6.38976C10.5632 6.50588 10.3434 6.68017 10.1194 6.85027C9.91607 7.03284 9.71274 7.21542 9.53845 7.42702Z"
        fill="currentColor"
      />
      <path
        d="M37.9831 4.36138C38.4063 5.57701 38.5099 6.83823 38.4726 8.11192C38.4644 8.33599 38.2528 8.53104 38.0038 8.56007C37.8876 8.57243 37.7673 8.57243 37.6512 8.57243C36.0621 8.57243 34.4732 8.57243 32.8841 8.57243C32.3738 8.57243 32.1498 8.34427 32.129 7.82978C32.1125 7.43981 32.0875 7.04983 31.9506 6.67232C31.6685 5.9172 31.1292 5.58529 30.3118 5.66002C29.3452 5.7513 28.7602 6.40266 28.7187 7.46056C28.6938 8.13267 28.897 8.75092 29.2332 9.32755C29.8928 10.4436 30.8138 11.3398 31.7266 12.2359C32.4277 12.9247 33.0915 13.6383 33.6475 14.4473C34.4648 15.6339 35.0083 16.9283 35.1951 18.3638C35.332 19.43 35.3195 20.5005 35.1245 21.5584C34.8134 23.2387 34.1038 24.7198 32.8302 25.8939C31.9921 26.6698 31.0129 27.2009 29.9301 27.5493C28.3329 28.0638 26.6941 28.0887 25.0511 27.8688C23.9143 27.7154 22.8356 27.3461 21.8897 26.6823C20.8732 25.9687 20.1721 25.002 19.7447 23.8403C19.2676 22.5417 19.1763 21.1933 19.2426 19.8284C19.251 19.6375 19.3754 19.5005 19.5622 19.4384C19.6451 19.4093 19.7406 19.4052 19.8277 19.4052C21.5701 19.4052 23.3085 19.4052 25.0511 19.4052C25.2212 19.4052 25.3747 19.43 25.4992 19.5711C25.5863 19.6706 25.6278 19.7744 25.6236 19.9072C25.6195 20.3345 25.5987 20.7619 25.6983 21.1851C25.8726 21.907 26.2626 22.3342 26.9762 22.384C27.7106 22.4338 28.3079 22.0438 28.5278 21.3758C28.8805 20.293 28.6689 19.2973 28.0631 18.3638C27.4159 17.3681 26.5695 16.5466 25.744 15.7044C24.6735 14.6132 23.7069 13.4474 23.0264 12.0658C22.5991 11.1987 22.3295 10.2901 22.2049 9.33175C22.0722 8.32352 22.1013 7.31949 22.3212 6.32793C22.5826 5.14961 23.0804 4.08343 23.8355 3.13327C24.8436 1.86377 26.1423 1.01328 27.6649 0.507071C29.034 0.0507553 30.4488 -0.0820315 31.8926 0.0465625C32.7016 0.117096 33.4899 0.262357 34.2533 0.540297C35.5436 1.005 36.5849 1.78904 37.3151 2.96317C37.5889 3.39885 37.8213 3.86356 37.9831 4.36138Z"
        fill="currentColor"
      />
      <path
        d="M54.7113 1.13748C54.7195 0.693642 54.5245 0.502794 54.064 0.502794C51.4793 0.502794 48.8945 0.506874 46.3098 0.498596C45.9821 0.498596 45.7788 0.623109 45.6502 0.917605C45.4012 1.49015 45.1399 2.05862 44.8868 2.63106C44.5009 3.48994 44.1151 4.3487 43.7292 5.21167C43.443 5.85475 43.1526 6.49375 42.8662 7.13672C42.7459 7.36907 42.6629 7.6181 42.5385 7.84626C42.0945 8.84201 41.6548 9.84184 41.2067 10.8376C40.8001 11.7421 40.3728 12.6341 39.9786 13.5426C39.4766 14.696 38.9497 15.8369 38.4394 16.9862C38.0411 17.8824 37.6304 18.7784 37.2237 19.6704C36.5891 21.0521 35.9791 22.4419 35.3567 23.8318C34.8922 24.8732 34.4274 25.9145 33.9627 26.9558C33.9047 27.0803 33.9172 27.1924 33.9711 27.3127C34.0914 27.5699 34.3196 27.5989 34.5643 27.5989C36.3608 27.5989 38.1572 27.5989 39.9537 27.5989C40.0492 27.5989 40.1445 27.5824 40.2441 27.5782C40.4807 27.5658 40.6217 27.433 40.7088 27.2256C41.0864 26.3128 41.4597 25.3959 41.8332 24.479C41.9162 24.2757 42.0572 24.1803 42.2771 24.1803C44.0943 24.1845 45.9115 24.1803 47.7288 24.1845C48.0938 24.1845 48.1478 24.2466 48.1311 24.6076C48.0897 25.3917 48.0523 26.1801 48.0192 26.9642C47.9984 27.433 48.1685 27.5989 48.6415 27.5989C50.4462 27.5989 52.2468 27.5989 54.0515 27.5989C54.122 27.5989 54.1885 27.5989 54.259 27.5906C54.5037 27.5616 54.6573 27.3957 54.6573 27.1509C54.6615 26.4663 54.6656 25.7859 54.6698 25.1013C54.6738 22.4502 54.6822 19.7991 54.6863 17.148C54.6905 14.1607 54.6905 11.1695 54.6988 8.18225C54.6988 5.834 54.6698 3.48574 54.7113 1.13748ZM48.8199 7.75497C48.7203 9.95796 48.6207 12.1652 48.517 14.3683C48.463 15.5672 48.4049 16.7663 48.3511 17.9653C48.3344 18.3429 48.2805 18.4092 47.8946 18.4175C47.3429 18.43 46.7911 18.4217 46.2393 18.4217C46.2393 18.4051 46.2393 18.3885 46.2393 18.3677C45.7207 18.3677 45.202 18.3719 44.6876 18.3677C44.4303 18.3636 44.3805 18.2931 44.476 18.0358C44.5797 17.7454 44.7 17.4592 44.8162 17.1688C45.4634 15.5549 46.1107 13.9409 46.7578 12.3229C47.3719 10.7878 47.9859 9.24854 48.6041 7.70927C48.6331 7.63465 48.6663 7.53509 48.7701 7.55584C48.8737 7.58487 48.8239 7.68852 48.8199 7.75497Z"
        fill="currentColor"
      />
      <path
        d="M75.5551 8.2278C75.5381 7.8876 75.5052 7.55569 75.4677 7.21957C75.3473 6.19071 75.0652 5.21151 74.5674 4.29877C73.6463 2.61026 72.1776 1.62279 70.3894 1.05852C69.2568 0.701764 68.0827 0.539944 66.9045 0.514997C65.2199 0.481884 63.5314 0.502636 61.847 0.506719C61.6354 0.506719 61.4279 0.651982 61.3781 0.846914C61.2868 1.20786 61.2039 1.56881 61.1209 1.92976C60.9674 2.60187 60.818 3.27398 60.6645 3.94201C60.5151 4.59338 60.3617 5.24474 60.2124 5.8961C60.0381 6.67605 59.868 7.45612 59.6896 8.23608C59.507 9.04098 59.312 9.84577 59.1294 10.6507C58.9262 11.5511 58.7271 12.4513 58.5238 13.3516C58.337 14.169 58.1461 14.9862 57.9595 15.8077C57.8143 16.4467 57.6691 17.0814 57.5238 17.7204C57.3662 18.405 57.2086 19.0894 57.0509 19.774C56.8684 20.5747 56.6858 21.3714 56.5032 22.1721C56.3539 22.8317 56.2045 23.4873 56.051 24.1469C55.9224 24.7029 55.7938 25.2588 55.6693 25.8148C55.5739 26.2255 55.4743 26.6322 55.3913 27.0429C55.3333 27.3499 55.4744 27.5365 55.7813 27.5822C55.8768 27.5947 55.9722 27.5988 56.0717 27.5988C56.9099 27.5988 57.7438 27.5988 58.5818 27.5988C59.453 27.5988 60.3243 27.5988 61.1914 27.5988C61.5607 27.5988 61.7059 27.4661 61.7847 27.105C61.9756 26.2172 62.1498 25.3252 62.378 24.4457C62.4859 24.0266 62.3739 23.8275 62.0046 23.6366C61.2537 23.2591 60.5151 22.8649 59.7725 22.475C59.6646 22.421 59.5651 22.3587 59.5983 22.2053C59.6356 22.0476 59.7642 22.085 59.868 22.085C60.9093 22.085 61.9548 22.085 62.9962 22.0891C63.5024 22.0891 64.0044 22.0518 64.5064 21.9937C65.4482 21.8859 66.3609 21.666 67.257 21.3589C68.6387 20.8859 69.9041 20.193 71.0242 19.2595C72.3229 18.1809 73.3517 16.8823 74.1109 15.3639C74.8122 13.9574 75.2353 12.4721 75.4428 10.9203C75.5585 10.0243 75.6004 9.12807 75.5551 8.2278ZM69.124 9.78771C69.0535 10.825 68.8461 11.8331 68.4934 12.8123C68.3731 13.057 68.2694 13.306 68.1615 13.5549C67.8462 14.1399 67.4686 14.6751 66.975 15.1315C66.2655 15.7829 65.4357 16.1106 64.469 16.0733C64.3321 16.0691 64.3072 16.0027 64.3321 15.8865C64.4317 15.4302 64.5313 14.9738 64.6308 14.5133C64.7844 13.8204 64.9379 13.1275 65.0955 12.4389C65.2781 11.6422 65.4772 10.8457 65.6473 10.045C65.7594 9.52224 65.8838 8.99948 65.9958 8.47671C66.0539 8.19457 66.0125 8.14059 65.7552 8.00372C64.942 7.57224 64.133 7.13248 63.3198 6.701C63.2078 6.64294 63.1331 6.58068 63.1746 6.4479C63.212 6.3151 63.3198 6.3193 63.4236 6.3193C64.6391 6.3193 65.8547 6.34005 67.0704 6.31511C68.0204 6.29435 68.6345 6.82132 68.9125 7.66773C69.1365 8.35639 69.1738 9.06582 69.124 9.78771Z"
        fill="currentColor"
      />
    </svg>
  ),
}
