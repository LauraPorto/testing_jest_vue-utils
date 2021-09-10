import Vuex from 'vuex'
import { nextTick } from 'vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import HelloTest from '@/components/HelloTest.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('HelloTest', () => {

    // let store
    // beforeEach(() => {
    //     store = new Vuex.Store({
    //         modules: {
    //             store: {
    //                 state: {
    //                     list
    //                 }
    //             }
    //         }
    //     })
    // })

  test('is a Vue instance', () => {
    const wrapper = shallowMount(HelloTest)
    expect(wrapper.vm).toBeTruthy()
  })

  test('button element exists', () => {
    const wrapper = shallowMount(HelloTest)
    const button = wrapper.find('button')
    expect(button.exists()).toBeTruthy()
  })

  test('onClick event exists', () => {
    const wrapper = shallowMount(HelloTest)  
    expect(wrapper.trigger('click')).toBeTruthy()    
  })  

  test('checking the data', () => {
    const wrapper = shallowMount(HelloTest, {
        data() {
            return  {
                count: 0  
            }
        }
    })
    expect(wrapper.vm.count).toBe(0)
  })

  test('click event return the counter (by rendered text)', async () => {
    const wrapper = shallowMount(HelloTest)
    const button = wrapper.find('button')
    const title = wrapper.find('p')
    expect(title.text('COUNTER: 0'))
    await button.trigger('click')
    expect(title.text('COUNTER: 1'))
  })

//   test('click event return the counter (by data value and nextTick)', async () => {
//     const wrapper = shallowMount(HelloTest, {
//         data(){
//             return {
//                 count: 0
//             }
//         }
//     })
//     expect(wrapper.find('button').trigger('click'))
//     await nextTick()
//     expect(wrapper.vm.count).toBe(1)
//     // nextTick nos permite ejecutar una acción después de cambiar los datos del DOM y antes de que se actualice el navegador y se muestre en pantalla, asegurándonos de que le dom se actualiza antes de hacer la assertion
//     // se utiliza en la línea anterior a que ese renderice el dato cambiado(en este caso, cuando a count le asignaremos 1 aunque en data parta de valor 0)
//   })

  test('checking the props', () => {
    const wrapper = shallowMount(HelloTest, {
        propsData: {
            admin: false
        }
    })
    // dos opciones para acceder a las props de nuestro componente
    expect(wrapper.props('admin')).toBe(false)
    expect(wrapper.props().admin).toBe(false)
  })

  test('counter method exists', () => {
    const wrapper = shallowMount(HelloTest)
    expect(wrapper.vm.counter).toBeTruthy() 
    expect(wrapper.find('counter')).toBeTruthy()
  })

//   test('counter method exists', () => {
//     const wrapper = shallowMount(HelloTest, {
//         store,
//         localVue
//     })
//     expect(wrapper)
//   })
})
 