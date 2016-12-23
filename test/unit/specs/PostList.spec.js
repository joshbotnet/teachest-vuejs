import Vue from 'vue'
import PostList from 'src/components/PostList'

describe('PostList.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(PostList)
    })
    expect(vm.$el.querySelector('.post-list h2').textContent)
      .to.equal('Posts')
  })
})
