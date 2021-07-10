import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    all_category: [{
        id: 1,
        img_path: "category.png",
        name: "Комплектующие",
        path: "copmlect",
        parents: []
      }, {
        id: 2,
        img_path: "category.png",
        name: "Процессоры",
        path: "procs",
        parents: ['copmlect']
      }, {
        id: 21,
        path: "matplat",
        img_path: "category.png",
        name: "Материнские платы",
        parents: ['copmlect']
      }, {
        id: 3,
        path: "videocarts",
        img_path: "category.png",
        name: "Видеокарты",
        parents: ['copmlect']

      }, {
        id: 4,
        path: "op",
        img_path: "category.png",
        name: "Оперативная память",
        parents: ['copmlect']
      }, {
        id: 5,
        path: "bp",
        img_path: "category.png",
        name: "Блоки питания",
        parents: ['copmlect']
      }, {
        id: 6,
        path: "ssd",
        img_path: "category.png",
        name: "SSD",
        parents: ['copmlect']
      }, {
        id: 7,
        path: "hd",
        img_path: "category.png",
        name: "Жесткие диски",
        parents: ['copmlect']
      }, {
        id: 8,
        path: "copmlect-for-server",
        img_path: "category.png",
        name: "Комплектующие для сервера",
        parents: ['copmlect']
      }, {
        id: 9,
        path: "serv-procs",
        img_path: "category.png",
        name: "Серверные процессоры",
        parents: ['copmlect-for-server']
      }, {
        id: 10,
        path: "serv-mp",
        img_path: "category.png",
        name: "Серверные материнские платы",
        parents: ['copmlect-for-server']
      }, {
        id: 11,
        path: "serv-ssd",
        img_path: "category.png",
        name: "Серверные SSD",
        parents: ['copmlect-for-server']
      }, {
        id: 12,
        path: "serv-hdd",
        img_path: "category.png",
        name: "Серверные HDD",
        parents: ['copmlect-for-server']
      }, {
        id: 30,
        path: "peref",
        img_path: "category.png",
        name: "Переферия",
        parents: [],
      }, {
        id: 32,
        path: "mouse",
        img_path: "category.png",
        name: "Мыши",
        parents: ['peref']
      }, {
        id: 33,
        path: "keys",
        img_path: "category.png",
        name: "Клавиатуры",
        parents: ['peref']
      },

      {
        id: 15,
        path: "monitors-and-as",
        img_path: "category.png",
        name: "Мониторы и аксессуары",
        parents: [],
      }, {
        id: 16,
        path: "monitors",
        img_path: "category.png",
        name: "Мониторы",
        parents: ['monitors-and-as']
      }, {
        id: 18,
        path: "gamemonitors",
        img_path: "category.png",
        name: "Игровые мониторы",
        parents: ['monitors-and-as']
      }, {
        id: 19,
        path: "noutbooks",
        img_path: "category.png",
        name: "Ноутбуки",
        parents: []
      }, {
        id: 20,
        path: "planshs",
        img_path: "category.png",
        name: "Планшеты",
        parents: []
      }
    ]
  },
  getters: {
    getCategoryies: state => ({
      parentpath
    }) => {

      return state.all_category.filter(e => {
        if (!parentpath)
          return e.parents.length === 0;
        else {
          return e.parents.includes(parentpath);
        }
      })
    }
  }
});
