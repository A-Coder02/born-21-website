import Typography from "../../common/Typography";

const CarouselCard = ({ theme = {}, card, className = '', style = null }) => {
    return <article style={style} className={`${theme?.cardClassName?.container} py-5 px-8 rounded-4xl flex-[0_0_24rem] min-h-96 ${className} transition-all duration-[1000ms] ease-[cubic-bezier(0.25,1.25,0.5,1)]`}>
        <Typography component={'div'} className={'h-20 !text-[5rem] font-black ' + theme?.cardClassName?.title} >“</Typography>
        <Typography className={'font-medium mb-3 ' + theme?.cardClassName?.title}>{card?.title}</Typography>
        <Typography variant='sm' className='mb-4 !leading-4'>{card?.content}</Typography>
        <div className="flex gap-3 items-center">
            <div className="">
                <Typography variant='sm' className='font-medium' >{card?.client?.name}</Typography>
                <Typography className='text-[0.625rem]' >{card?.client?.company}</Typography>
            </div>
        </div>
    </article>
}

export default CarouselCard;
