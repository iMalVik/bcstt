import { ru } from 'vuetify/es5/locale/'

export default {
    
    $vuetify: {
        ...ru,
        dataTable: {
            itemsPerPageText: 'Количество элементов на странице:',
            ariaLabel: {
                sortDescending: 'Упорядочено по убыванию.',
                sortAscending: 'Упорядочено по возрастанию.',
                sortNone: 'Не упорядочено.',
                activateNone: 'Активируйте, чтобы убрать сортировку.',
                activateDescending: 'Активируйте для упорядочивания убыванию.',
                activateAscending: 'Активируйте для упорядочивания по возрастанию.',
            },
            sortBy: 'Сортировать по',
        },
    },
}
