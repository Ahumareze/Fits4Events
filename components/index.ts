import Header from "./header/Header";
import Canva from "./canva/Canva";
import Button from "./button/Button";
import Collection from "./collection/Collection";
import SizeButtons from "./sizeButtons/SizeButtons";
import Item from "./item/Item";
import Input from "./input/Input";
import Notification from "./notification/Notification";
import EmptyPage from "./emptyPage/EmptyPage";

//animations
import { AddedToCart, EmptyHistory } from "./animations/Animations";
import Loader from "./Loader/Loader";

//utilities
import currencyConverter from "./utilities/currencyConverter";
import {link, CurrencyLink, CurrencyApiKey} from "./utilities/api";
import collections from "./utilities/collections";

export {
    Header,
    Canva,
    Button,
    Collection,
    collections,
    SizeButtons,
    Item,
    Input,
    link,
    CurrencyLink,
    CurrencyApiKey,
    AddedToCart,
    EmptyHistory,
    Notification,
    EmptyPage,
    Loader,
    currencyConverter
}