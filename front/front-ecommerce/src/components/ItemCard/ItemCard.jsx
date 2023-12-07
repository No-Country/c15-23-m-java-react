import PropTypes from "prop-types";
import {Card, ItemBodyCard, ItemTitleCard, ItemImgCard} from './styles'

function ItemCard({ imageSource, title, text,  }) {
  return (
    <Card>
      <ItemImgCard>
        <img src={imageSource} alt="a wallpaper" className="itemImg" />
      </ItemImgCard>
      <ItemBodyCard>
        <ItemTitleCard/>
        <p><strong>{title}</strong></p>
        <p className="">
          {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga ."}
        </p>
        <div>
          <a
            href=""
            className=" border-0"
            rel="noreferrer">
            <button>Ver más</button>
          </a>
        </div>
      </ItemBodyCard>
    </Card>
  );
}

ItemCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default ItemCard;