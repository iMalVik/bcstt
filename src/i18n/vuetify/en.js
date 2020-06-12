import { en } from 'vuetify/es5/locale/'

export default {
    
    $vuetify: {
        ...en,
        dataTable: {
            itemsPerPageText: 'Number of items per page:',
            ariaLabel: {
                sortDescending: 'Sorted descending.',
                sortAscending: 'Sorted ascending.',
                sortNone: 'Not sorted.',
                activateNone: 'Activate to remove sorting.',
                activateDescending: 'Activate to sort descending.',
                activateAscending: 'Activate to sort ascending.',
            },
            sortBy: 'Sort by',
        },
    },
}
