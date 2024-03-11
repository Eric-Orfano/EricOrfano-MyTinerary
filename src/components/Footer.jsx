const Footer = () => {
    return (
    <>
        <footer className="flex justify-around items-center border border-solid bg-gray-900 text-white">
            <div className="flex flex-row flex-wrap m-2 p-5">
                <a className="flex flex-row items-center gap-2 font-bold p-10" href="https://web.whatsapp.com/"><img className="w-6 h-6" src="./whatsapp.png" alt="" />WhatsApp</a>
                <a className="flex flex-row items-center gap-2 font-bold p-10" href="https://instagram.com"><img className="w-6 h-6" src="./instagram.png" alt="" /> Instagram</a>
                <a className="flex flex-row items-center gap-2 font-bold p-10" href="https://facebook.com"><img className="w-6 h-6" src="./facebook.png" alt="" />Facebook</a>
                <a className="flex flex-row items-center gap-2 font-bold p-10" href="https://twitter.com"><img className="w-6 h-6" src="./twitter.png" alt="" />Twitter</a>
                <a className="flex flex-row items-center gap-2 font-bold p-10" href="https://hotmail.com"><img className="w-6 h-6" src="./gmail.png" alt="" /><a href="https://gmail.com">Gmail</a></a>
            </div>
        </footer>   
    </>
)
}

 export default Footer