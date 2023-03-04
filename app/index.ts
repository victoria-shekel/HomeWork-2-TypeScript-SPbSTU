import { getTours } from "@rest/tours";
import './assets/styles/main.scss';
import { images } from "@services/img/img";
import { ITours } from "./models/tours";
import { getTourTemplate } from "./templates/tours";
import { openModal } from "@services/modal/modalService";
import { initFooterTitle, initHeaderTitle, initToursDivElements } from "@services/general/general";

export let  toursDataArray: ITours[] = [];

const imagesStore = images;

// init data
const tourData: Promise<ITours[]> = getTours();

function initApp() {
  tourData.then((data): void => {
    console.log('call');

    toursDataArray = data;

    initToursDivElements(data);

    initHeaderTitle('Туры', 'h1');

    initFooterTitle('Туры по всему миру', 'h2');

  });
}

// init app
initApp()

/*  - перенести все методы ниже в раздел services (сюда импортировать и вызывать)
    - создать метод initApp который будет здесь вызываться, в теле метода добавить эти импортированные методы
    - Указать в методах возвращающие типы, типы для параметров, в теле функции также указать типы чтобы не было ошибок
*/
