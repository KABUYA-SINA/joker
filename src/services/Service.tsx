import React,{useState, useEffect} from 'react';
import images from '../data/images';
import Cards from '../components/Cards';
import '../sass/pages/_service.scss';

interface ImagesType{
    id: string ,
    cover: string,
    alt: string
}

const Service: React.FC  = () => {

    const [data, setData] = useState<Array<ImagesType>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    let hasFlipped: boolean = false;
    let lockBoard: boolean = false;
    let firstCard: HTMLDivElement|null, secondCard: HTMLDivElement|null;

    useEffect(() => {
        setIsLoading(true);
        setData(images);
        setIsLoading(false);
    }, [])

    //Duplicate cards
    const duplicatedArray = (anArray:  ImagesType[]) =>{
        let doubleArray:  Array<ImagesType> = []
        doubleArray.push(...anArray);
        doubleArray.push(...anArray);
        return doubleArray;
    }

    //shuffle cards
    const mixedCards = (arrayToMix: ImagesType[]) =>{
        return arrayToMix.map((a) =>({ sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
    }

    let allImages = duplicatedArray(data);
    allImages = mixedCards(allImages);

    const handleResetBoard = () => {
        [hasFlipped, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    //check match
    const handleCheck = () => {
        let isMacthed = firstCard?.dataset.value === secondCard?.dataset.value;
        isMacthed ? disableCards() : unflipCards()

    }

    //remove event
    const disableCards = () => {
        firstCard?.removeEventListener('click', handleClick);
        secondCard?.removeEventListener('click', handleClick);
        firstCard?.classList.add('matched');
        secondCard?.classList.add('matched');
        const cardNotFinded = document.querySelectorAll('.card:not(.matched)');
        if (cardNotFinded.length === 0) {
                const winner = setTimeout(() => {
                alert('Bravo, vous avez gagné 🫵');
            }, 500)
            return () => clearTimeout(winner);
        }
        handleResetBoard();
    }

    //flip card
    const unflipCards = () => {
        lockBoard = true;
        const flippedCard = setTimeout(() => {
            firstCard?.classList.remove('flip');
            secondCard?.classList.remove('flip');
            handleResetBoard();
            return;
        }, 1500)
        return () => clearTimeout(flippedCard);
    }

    //Handle event on click
    const handleClick = (e:React.BaseSyntheticEvent | any) => {
        e.preventDefault();
        if(lockBoard){return;};
        if(e.target.parentElement === firstCard){return};
        if(e.target.parentElement.classList.value === "card flip matched") {return;};

        let targedEvent = e.target as HTMLElement;
        let parentTargetEvent = targedEvent.parentElement as HTMLDivElement;
        parentTargetEvent?.classList.add('flip');

        if(!hasFlipped){
            hasFlipped = true;
            firstCard = parentTargetEvent;
        }else{
            secondCard = parentTargetEvent;
            handleCheck();
        }
    }

    return (
        <div className="service" id='select'>
            {
                allImages.map(({id, cover, alt}, index) =>(
                    isLoading ? <div className="loader">loading...</div> :
                    <div className='card' id='card' data-value={cover} onClick={handleClick} key={`${id} + ${index}`}>
                        <Cards id={id} cover={cover} alt={alt} key={`${id} + ${index}`} />
                    </div>
                ))
            }
        </div>
    );
}

export default Service;



