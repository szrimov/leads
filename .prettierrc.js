module.exports = {
  semi: false,
  trailingComma: 'none',
  singleQuote: true,
  bracketSpacing: false,
  arrowParens: 'avoid',
  // для lang="html" - по 1 атрибуту в строке (используем в иконках .vue-файлы)
  singleAttributePerLine: true,
  // переопределение св-в для vue файлов
  overrides: [
    {
      files: '*.vue',
      options: {
        bracketSpacing: true,
        bracketSameLine: true
      }
    }
  ],
  pugSingleQuote: false,
  // разделение атрибутов пробелом
  pugAttributeSeparator: 'none',
  // перенос атрибутов (допустим 1 атрибут, далее перенос на новую строчку)
  pugWrapAttributesThreshold: 1,
  // отступ после <template>
  pugSingleFileComponentIndentation: true,
  // порядок атрибутов
  pugSortAttributesBeginning: [
    '^cols$',
    '^v-else$',
    '^v-for$',
    '^:key$',
    '^v-if$',
    '^v-else-if$',
    '^v-on$',
    '^v-bind$',
    '^ref$',
    '^v-model',
    '^name$',
    '^:?type$',
    '^:value$',
    '^v-text$',
    '^:?label$',
    '^:headers$',
    '^:items$',
    '^:?item-text$',
    '^:?item-value$',
    '^:?item-disabled$',
    '^:?placeholder$',
    '^:?src$',
    '^:?color$',
    '^:?text-color$',
    '^:?icon$',
    '^:?small$'
  ],
  // порядок атрибутов
  pugSortAttributesEnd: [
    '^:?hint$',
    '^:?persistent-hint$',
    '^prepend-',
    '^@click:prepend',
    '^append-',
    '^@click:append',
    '^:to$',
    '^exact$',
    '^:(?!(width|height|loading|disabled|data-))',
    '^target$',
    '^:?width$',
    '^:?height$',
    '^@click',
    '^@',
    '^:loading$',
    '^:disabled$',
    '^:?data-'
  ]
}
