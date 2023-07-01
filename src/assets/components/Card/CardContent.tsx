import Card, {CardVariant} from "./Card";

const CardContent = () => {

    return (
        <div>
            <Card
                onClick={(num) => console.log('click', num)}
                variant={CardVariant.outlined}
                width='200px'
                height='200px'>
                <button>Кнопка</button>
            </Card>
        </div>
    );
};

export default CardContent;