import "./Featured.css";

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/540x270/687157.webp?k=06b9ded0733baaca9efaa06a69ae4d0d74311d620280947ae909015e804028fb&o=" alt="" />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/540x270/687080.webp?k=c88fb97fd92fcd30079f5a46d39bbee03c34e769b212514bd09aa31954ab820f&o=" alt="" />
                <div className="featuredTitles">
                    <h1>Leeds</h1>
                    <h2>203 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/540x270/687390.webp?k=bd88fa5d6426847a71e5e119fef3ffd78d490b64bb212350400cc9cb74544da0&o=" alt="" />
                <div className="featuredTitles">
                    <h1>Reading</h1>
                    <h2>103 properties</h2>
                </div>
            </div>
            {/* <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/540x270/687285.webp?k=84f6f2377af1738b4ee29fccea1af65634fe4258712f96f54491c08f1d026a95&o=" alt="" />
                <div className="featuredTitles">
                    <h1>New castle</h1>
                    <h2>603 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/540x270/967919.webp?k=de3609fd5bbb0eead49d41a6d7edeb731376d0c89e372bce4fce6d80c64991a5&o=" alt="" />
                <div className="featuredTitles">
                    <h1>Bringhome</h1>
                    <h2>103 properties</h2>
                </div>
            </div> */}
        </div>
    );
};

export default Featured;