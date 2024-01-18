import { contactService } from "@/services/contactService";

export default {
    state() {
        return {
            contacts: null,
        }
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        removeContact(state, { contactId }) {
            const idx = state.contacts.findIndex(contact => contact._id === contactId)
            state.contacts.splice(idx, 1)
        },
        updateContact(state, {savedContact}) {
            const idx = state.contacts.findIndex(contact => contact._id === savedContact._id)
            state.contacts.splice(idx, 1, savedContact)
        },
        SaveContact(state, {savedContact}) {
            state.contacts.unshift(savedContact)
        },
    },
    actions: {
        async loadContacts(context) {
            try {
                const contacts = await contactService.getContacts()
                context.commit({ type: 'setContacts', contacts })
            } catch (err) {
                console.log(err)
                throw err
            }
        },
        async removeContact(context, {contactId}) {
            try {
                const contacts = await contactService.deleteContact(contactId)
                context.commit({ type: 'removeContact', contactId })
            } catch (err) {
                console.log("Coul not remove contact", err);
            }
        },
        async saveContact(context, { contact }) {
            const isUpdate = !!contact._id
            try {
                const savedContact = await contactService.saveContact(contact)
                if(isUpdate) {
                    context.commit({ type: 'updateContact', savedContact })
                } else {
                    context.commit({ type: 'saveContact', savedContact })
                }
            } catch (err) {
                console.log(err)
                throw err
            }
        }
    },
    getters: {
        contacts(state) {
             return state.contacts 
            }
    },
}

// export default {
//     state() {
//         return {
//             cars: null,
//         }
//     },
//     mutations: {
//         setCars(state, { cars }) {
//             state.cars = cars
//         },
//         removeCar(state, { carId }) {
//             const idx = state.cars.findIndex(car => car._id === carId)
//             state.cars.splice(idx, 1)
//         },
//         updateCar(state, { savedCar }) {
//             console.log(savedCar)
//             const idx = state.cars.findIndex(car => car._id === savedCar._id)
//             state.cars.splice(idx, 1, savedCar)
//         },
//         saveCar(state, { savedCar }) {
//             state.cars.push(savedCar)
//         },
//     },
//     actions: {
//         async loadCars(context) {
//             try {
//                 const cars = await carService.query()
//                 context.commit({ type: 'setCars', cars })
//             } catch (err) {
//                 console.log(err)
//                 throw err
//             }
//         },
//         async removeCar(context, { carId }){
//             try {
//                 await carService.remove(carId)
//                 context.commit({ type: 'removeCar', carId })
//             } catch (err) {
//                 console.log(err)                
//                 throw err
//             }
//         },
//         async saveCar(context, { car }) {
//             const isUpdate = !!car._id

//             try {
//                 const savedCar = await carService.save(car)
    
//                 if(isUpdate) {
//                     context.commit({ type: 'updateCar', savedCar })
//                 } else {
//                     context.commit({ type: 'saveCar', savedCar })
//                 }
//             } catch (err) {
//                 console.log(err)
//                 throw err
//             }
//         }
//     },
//     getters: {
//         cars(state) { return state.cars }
//     },
// }