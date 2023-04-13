import "../content/Content.css";

function Content(){
    return (
     <>
         <div className="lowestpriceContainer">
        <div className="lowestPrice_text">
            <h1>Lowest Prices </h1>
            <h1>Best Quality Shopping</h1>
            <div className="lowestPriceWhay">
                <div className="lowestPriceItem">
                    <div className="lowestPrice_icon">
                        <img src="https://images.meesho.com/images/pow/freeDelivery.svg" alt=""/>
                    </div>
                    <p>Free Delivery</p>
                </div>

                <div className="lowestPriceItem">
                    <div className="lowestPrice_icon">
                        <img src="https://images.meesho.com/images/pow/cod.svg" alt=""/>
                    </div>
                    <p>Cash on Delivery</p>
                </div>
                <div className="lowestPriceItem">
                    <div className="lowestPrice_icon">
                        <img src="https://images.meesho.com/images/pow/easyReturns.svg" alt=""/>
                    </div>
                    <p>Easy Returns</p>
                </div>
            </div>

            <button className="downloadApp_contianer">
                <div className="downloadAppIcon">
                    <img src="https://images.meesho.com/images/pow/playstoreSmallIcon.webp" alt=""/>
                </div>
                <p>Download the Meesho App</p>
            </button>

        </div>
        <div className="lowestPrice_image">
            <img src="https://images.meesho.com/images/marketing/1631722939962.webp" alt=""/>
        </div>
    </div>

    <div className="topCategoriesFrom">
        <div className="topCategoriesHeading">
            <span className="horizontalLine"></span>
            <h1>Top Categories to choose from</h1>
            <span className="horizontalLine"></span>
        </div>
        <div className="topCategoreisImage">
            <img src="https://images.meesho.com/images/marketing/1649760442043.webp" alt=""/>
            <img src="https://images.meesho.com/images/marketing/1649760423313.webp" alt=""/>
            <img src="https://images.meesho.com/images/marketing/1649759799809.webp" alt=""/>
        </div>
        <div className="essentialContaienr">
            <img src="https://images.meesho.com/images/marketing/1664368165450.webp" className="essen-btn" alt=""/>

            <div className="essential_item">
                <img src="https://images.meesho.com/images/marketing/1649760808952.webp" alt=""/>
                <img src="https://images.meesho.com/images/marketing/1664364866805.webp" alt=""/>
            </div>

            <div className="essential_item">
                <img src="https://images.meesho.com/images/marketing/1649760703179.webp" alt=""/>
                <img src="https://images.meesho.com/images/marketing/1664364917657.webp" alt=""/>
            </div>

            <div className="essential_item">
                <img src="https://images.meesho.com/images/marketing/1649760786763.webp" alt=""/>
                <img src="https://images.meesho.com/images/marketing/1664364898513.webp" alt=""/>
            </div>

        </div>


        <div className="becomesellerBanner_Container">
            <img src="https://images.meesho.com/images/pow/downloadBannerDesktop.webp" className="becomesellerBanner" alt=""/>
            <div className="becomeSeller_Content">
                <div className="becomeSeller_content_content">
                    <h2>Become a Seller and </h2>
                    <h1>Start your Online Business
                        with Zero Investment</h1>
                    <div className=" becomerSeller_appDownload_container">
                        <div className="becomerSeller_appDownload">
                            <img src="https://images.meesho.com/images/pow/playstoreIcon.webp" alt=""/>
                        </div>
                        <div className="becomerSeller_appDownload">
                            <img src="https://images.meesho.com/images/pow/appstoreIcon.webp" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="meesho_supper_container">
            <img src="https://images.meesho.com/images/pow/supplyBannerDesktop.webp" alt=""/>
            <div className="meesho_supper_container_content">
                <div className="meesho_supper_container_content_content">
                    <h1>Register as a Meesho Supplier</h1>
                    <p>Sell your products to crores of customers at 0% commission</p>
                    <div className="meesho-suppliear_benifit_container">
                        <div className="meesho_supper_benifit">
                            <img className="meeesho_benifit_image"
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMCAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDEwLjVDMCA0Ljk4IDQuNDggMC41IDEwIDAuNUMxNS41MiAwLjUgMjAgNC45OCAyMCAxMC41QzIwIDE2LjAyIDE1LjUyIDIwLjUgMTAgMjAuNUM0LjQ4IDIwLjUgMCAxNi4wMiAwIDEwLjVaTTcuMjgyODggMTQuNzkyNUM3LjY3Mjg4IDE1LjE4MjUgOC4zMDI4OCAxNS4xODI1IDguNjkyODggMTQuNzkyNUwxNi4yNzI5IDcuMjAyNUMxNi42NjI5IDYuODEyNSAxNi42NjI5IDYuMTgyNSAxNi4yNzI5IDUuNzkyNUMxNS44ODI5IDUuNDAyNSAxNS4yNTI5IDUuNDAyNSAxNC44NjI5IDUuNzkyNUw3Ljk4Mjg4IDEyLjY3MjVMNS4xMDI4OCA5Ljc5MjVDNC43MTI4OCA5LjQwMjUgNC4wODI4OCA5LjQwMjUgMy42OTI4OCA5Ljc5MjVDMy41MDU2MiA5Ljk3OTMzIDMuNDAwMzkgMTAuMjMzIDMuNDAwMzkgMTAuNDk3NUMzLjQwMDM5IDEwLjc2MiAzLjUwNTYyIDExLjAxNTcgMy42OTI4OCAxMS4yMDI1TDcuMjgyODggMTQuNzkyNVoiIGZpbGw9IiMwNkE3NTkiLz4KPC9zdmc+Cg==" alt=""/>
                            <p>Grow your business 10x</p>
                        </div>
                        <div className="meesho_supper_benifit">
                            <img className="meeesho_benifit_image"
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMCAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDEwLjVDMCA0Ljk4IDQuNDggMC41IDEwIDAuNUMxNS41MiAwLjUgMjAgNC45OCAyMCAxMC41QzIwIDE2LjAyIDE1LjUyIDIwLjUgMTAgMjAuNUM0LjQ4IDIwLjUgMCAxNi4wMiAwIDEwLjVaTTcuMjgyODggMTQuNzkyNUM3LjY3Mjg4IDE1LjE4MjUgOC4zMDI4OCAxNS4xODI1IDguNjkyODggMTQuNzkyNUwxNi4yNzI5IDcuMjAyNUMxNi42NjI5IDYuODEyNSAxNi42NjI5IDYuMTgyNSAxNi4yNzI5IDUuNzkyNUMxNS44ODI5IDUuNDAyNSAxNS4yNTI5IDUuNDAyNSAxNC44NjI5IDUuNzkyNUw3Ljk4Mjg4IDEyLjY3MjVMNS4xMDI4OCA5Ljc5MjVDNC43MTI4OCA5LjQwMjUgNC4wODI4OCA5LjQwMjUgMy42OTI4OCA5Ljc5MjVDMy41MDU2MiA5Ljk3OTMzIDMuNDAwMzkgMTAuMjMzIDMuNDAwMzkgMTAuNDk3NUMzLjQwMDM5IDEwLjc2MiAzLjUwNTYyIDExLjAxNTcgMy42OTI4OCAxMS4yMDI1TDcuMjgyODggMTQuNzkyNVoiIGZpbGw9IiMwNkE3NTkiLz4KPC9zdmc+Cg==" alt=""/>
                            <p>Enjoy 100% Profit</p>
                        </div>
                        <div className="meesho_supper_benifit">
                            <img className="meeesho_benifit_image"
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMCAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDEwLjVDMCA0Ljk4IDQuNDggMC41IDEwIDAuNUMxNS41MiAwLjUgMjAgNC45OCAyMCAxMC41QzIwIDE2LjAyIDE1LjUyIDIwLjUgMTAgMjAuNUM0LjQ4IDIwLjUgMCAxNi4wMiAwIDEwLjVaTTcuMjgyODggMTQuNzkyNUM3LjY3Mjg4IDE1LjE4MjUgOC4zMDI4OCAxNS4xODI1IDguNjkyODggMTQuNzkyNUwxNi4yNzI5IDcuMjAyNUMxNi42NjI5IDYuODEyNSAxNi42NjI5IDYuMTgyNSAxNi4yNzI5IDUuNzkyNUMxNS44ODI5IDUuNDAyNSAxNS4yNTI5IDUuNDAyNSAxNC44NjI5IDUuNzkyNUw3Ljk4Mjg4IDEyLjY3MjVMNS4xMDI4OCA5Ljc5MjVDNC43MTI4OCA5LjQwMjUgNC4wODI4OCA5LjQwMjUgMy42OTI4OCA5Ljc5MjVDMy41MDU2MiA5Ljk3OTMzIDMuNDAwMzkgMTAuMjMzIDMuNDAwMzkgMTAuNDk3NUMzLjQwMDM5IDEwLjc2MiAzLjUwNTYyIDExLjAxNTcgMy42OTI4OCAxMS4yMDI1TDcuMjgyODggMTQuNzkyNVoiIGZpbGw9IiMwNkE3NTkiLz4KPC9zdmc+Cg==" alt="" />
                            <p>Sell all over India</p>
                        </div>
                    </div>
                    <div className="signup_btn_now">Sign up now</div>
                </div>
            </div>
        </div>

    </div>
   
     </>
    )
}
export default Content;
