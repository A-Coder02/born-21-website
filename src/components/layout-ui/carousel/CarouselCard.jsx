import Typography from "../../common/Typography";

const CarouselCard = ({ theme = {}, card, className = '', style = null }) => {
    return <article style={{
        backgroundColor: theme?.cardClassName?.container
    }} className={`flex flex-col  py-5 px-8 rounded-4xl flex-[0_0_24rem] min-h-96 h-[26rem] md:h-[30rem] ${className} transition-all duration-[1000ms] ease-[cubic-bezier(0.25,1.25,0.5,1)]`}>
        <p
            style={{
                color: theme?.cardClassName?.title
            }}
            className={'md:h-20  !text-6xl md:!text-[5rem] font-black '} >“</p>
        <p
            style={{
                color: theme?.cardClassName?.title
            }}
            className={'font-medium mb-3 md:text-lg '}>{card?.title}</p>
        <h5 className="mb-4 text-sm md:text-base" >{card.content}</h5>
        {/* <Typography variant='sm' className='mb-4 !leading-4 !text-sm md:!text-base'>{card?.content}</Typography> */}
        <div className="flex gap-3 items-center mt-auto">
            <div className="mt-auto">
                <p
                    style={{
                        color: theme?.cardClassName?.title
                    }}
                    className={`text-sm font-medium`}>{card?.client?.name}</p>
                <p className="text-sm ">{card?.client?.company}</p>
            </div>
        </div>
    </article>
}

export default CarouselCard;
