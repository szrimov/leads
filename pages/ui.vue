<template lang="pug">
  .page.ui.wrapper
    div ui
    br
    commonButton(type="primary icon")
      | Создать категорию
      iconPlus
    br
    commonButton(type="neutral")
      | Отмена
    br
    commonInput(v-model="queryInput")
      | Вложенные статьи
    br
    commonInput(
      v-model="querySearch"
      type="search"
      @clear="querySearch = ''")
      | Найти статью
      template(#icon)
        component(:is="querySearch ? 'iconClose' : 'iconLoupe'")
    br
    searchSelect(:data="options")
    br
    categoryButton(data="Категория 1")
    br
    articleCard(
      v-for="item in articles"
      :key="item.id"
      :data="item")
</template>

<script>
import commonButton from '@/components/common/button'
import commonInput from '@/components/common/input'
import searchSelect from '@/components/search-select'
import categoryButton from '@/components/category-button'
import articleCard from '@/components/article-card'
import iconPlus from '@/components/icons/plus'
import iconLoupe from '@/components/icons/loupe'
import iconClose from '@/components/icons/close'

export default {
  name: 'page-index',
  components: {
    commonButton,
    commonInput,
    searchSelect,
    categoryButton,
    articleCard,
    iconPlus,
    iconLoupe,
    iconClose
  },
  data() {
    return {
      queryInput: '',
      querySearch: '',
      options: [
        {
          title: 'Название статьи 123',
          id: 1
        },
        {
          title: 'Название статьи 1234',
          id: 2
        },
        {
          title: 'Название статьи 12345',
          id: 3
        }
      ],
      articles: [
        {
          likesQuantity: 40,
          title: 'Заголовок',
          subtitle:
            // eslint-disable-next-line max-len
            'Идейные соображения высшего порядка, а также сложившаяся структура организации играет важную роль в формировании существенных финансовых и административных условий. Равным образом начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки направлений прогрессивного развития.'
        },
        {
          likesQuantity: 40,
          title: 'Заголовок',
          subtitle:
            // eslint-disable-next-line max-len
            'Идейные соображения высшего порядка, а также сложившаяся структура организации играет важную роль в формировании существенных финансовых и административных условий. Равным образом начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки направлений прогрессивного развития.'
        },
        {
          likesQuantity: 40,
          title: 'Заголовок',
          subtitle:
            // eslint-disable-next-line max-len
            'Идейные соображения высшего порядка, а также сложившаяся структура организации играет важную роль в формировании существенных финансовых и административных условий. Равным образом начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки направлений прогрессивного развития.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.ui {
  padding: 0 100px;
}
</style>
