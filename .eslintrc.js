module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  // настройка для babel
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 'latest', // возможности последней версии ES
    sourceType: 'module',
    requireConfigFile: false
  },
  // конфиги/плагины
  extends: [
    'eslint:recommended',
    'airbnb-base', // настройка eslint от airbnb
    'plugin:vue/recommended',
    '@nuxt/eslint-config',
    'plugin:nuxt/recommended',
    'prettier' // форматирование
  ],
  settings: {
    'import/core-modules': ['vue', 'vuex']
  },
  rules: {
    // обеспечивает максимальную длину строки
    'max-len': ['error', {code: 120, ignoreComments: true}],

    'import/order': 'off',

    'no-mixed-operators': 'off',

    // запрет неиспользуемых переменных
    'no-unused-vars': 'error',

    // запрет неиспользуемых переменных (правило с typescript, оставляем только 'no-unused-vars')
    '@typescript-eslint/no-unused-vars': 'off',

    // обеспечить согласованное использование расширения файла в пути импорта
    'import/extensions': 'off',

    // ESLint предпочитает экспорт по умолчанию
    'import/prefer-default-export': 'off',

    // разрешшенный импорт файла
    'import/no-unresolved': 'off',

    // отступы (форматирует prettier)
    indent: 'off',

    // кавычки
    quotes: ['error', 'single'],

    //  запятая:
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],

    // точка с запятой
    semi: ['error', 'never'],

    // скобки в стрелочной функции
    'arrow-parens': ['warn', 'as-needed'],

    // пробел перед скобками в ф-ции
    'space-before-function-paren': 'off',

    // пробел перед скобками в ф-ции
    'space-in-parens': [1, 'never'],

    // console
    'no-console': ['warn', {allow: ['warn', 'error']}],

    // структура файла
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style']
      }
    ],

    // Проверка на максимальное количество атрибутов в строке
    // Значения singleline.max (number) и multiline.max (number) установим в значение 1,
    // чтобы каждый атрибут начинался с новой строчки
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1
        },
        multiline: {
          max: 1
        }
      }
    ],

    // Проверка регистра для стиля именования
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: true
      }
    ],

    // Проверка нерегулярных пробелов:
    'vue/no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: false,
        skipRegExps: false,
        skipTemplates: false,
        skipHTMLAttributeValues: false,
        skipHTMLTextContents: false
      }
    ],

    // Проверка на определенный регистр для имени компонента:
    'vue/component-definition-name-casing': ['error', 'kebab-case'],

    // Запретить дублирование имен полей:
    'vue/no-dupe-keys': [
      'error',
      {
        groups: []
      }
    ],

    // порядок св-в/методов в компоненте
    'vue/order-in-components': [
      'error',
      {
        order: [
          'name',
          'directives',
          'components',
          'mixins',
          ['provide', 'inject'],
          'model',
          'props',
          'filters',
          'data',
          'computed',
          'watch',
          'methods',
          'LIFECYCLE_HOOKS',
          'ROUTER_GUARDS'
        ]
      }
    ],

    // наименование кастомных эвентов в camelCase
    'vue/custom-event-name-casing': ['error', 'camelCase'],

    // наименование в props в camelCase
    'vue/prop-name-casing': ['error', 'camelCase'],

    // обязательно type в props
    'vue/require-prop-types': 'error',

    // обязательно default в props
    'vue/require-default-prop': 'off',

    // имена компонентов всегда состояли из нескольких слов
    'vue/multi-word-component-names': 'off',

    // разрешено в циклах
    'no-plusplus': ['warn', {allowForLoopAfterthoughts: true}],

    // что-бы могли вернуть arr.map(x => x)
    'no-param-reassign': 'off',

    // проверка импортов из dep или devDep
    'import/no-extraneous-dependencies': 'off',

    // использование await в циклах
    'no-await-in-loop': 'warn',

    // в переменных _
    'no-underscore-dangle': 'off',

    'no-shadow': 'off',

    'func-names': ['warn', 'never'],

    'no-nested-ternary': 'warn',

    'no-restricted-syntax': 'warn',

    'guard-for-in': 'warn',

    'no-unused-expressions': 'warn',

    'prefer-destructuring': ['error', {object: true, array: false}]
  }
}
