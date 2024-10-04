export default function Page() {
    return (
       
            <div
              className="dark:bg-darkBg text-text dark:text-darkText border-b-4 border-r-4 border-b-black border-r-black bg-bg p-8 py-10 w600:px-[30px] w400:px-5"
             
            >
              <div className="mt-8 grid grid-cols-2 gap-5 text-base w400:text-sm">
                  <a
                    className="border-border dark:border-darkBorder text-text shadow-light dark:shadow-dark cursor-pointer rounded-base border-2 bg-main px-4 py-2 text-center uppercase transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none"
                    href="https://docs.google.com/document/d/e/2PACX-1vS1q3xYNy8dzKFjOgvDZ4gSM0hSaFkdGRT1aq9YnBeoo98NF4vQDdTmNCTOEg0d_K3xEcpuHf1i8SAJ/pub"
                    target="_blank"
                  >
                    Open CV
                  </a>
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-5 text-base w400:text-sm">
                  <a
                    className="border-border dark:border-darkBorder text-text shadow-light dark:shadow-dark cursor-pointer rounded-base border-2 bg-main px-4 py-2 text-center uppercase transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none"
                    target="_blank"
                  >
                    Download CV
                  </a>
                  </div>
            </div>
          

    )
  }
  