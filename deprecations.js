/*
 * This object's keys are (semver) version numbers, and the
 * values are arrays of objects each with a "selectors"
 * array and a "message" string.
 */
const versionDeprecations = {
  '17.0.0': [
    {
      selectors: ['.p-7', '.p-8', '.p-9', '.p-10', '.p-11', '.p-12'],
      message: `This selector is deprecated, please use pt-X, pr-X, pb-X, and pl-X to set paddings on all sides above spacing level 6.`
    },
    {
      selectors: [
        '.top-n0',
        '.right-n0',
        '.bottom-n0',
        '.left-n0',
        '.top-md-n0',
        '.right-md-n0',
        '.bottom-md-n0',
        '.left-md-n0',
        '.top-lg-n0',
        '.right-lg-n0',
        '.bottom-lg-n0',
        '.left-lg-n0'
      ],
      message: `This selector is deprecated, please use a non-negative selector to set the value to 0 (e.g. top-md-0).`
    },
    {
      selectors: ['.bg-shade-gradient'],
      message: `This selector is deprecated, please use "color-bg-secondary" instead of "bg-shade-gradient".`
    },
    {
      selectors: ['.btn-large-mktg'],
      message: `Please use the ".btn-lg-mktg" class instead of "btn-large-mktg".`
    },
    {
      selectors: ['.color-border-overlay'],
      message: `Please use the ".color-border-primary" class instead of ".color-border-overlay".`
    },
    {
      selectors: [':-ms-input-placeholder'],
      message: 'Browserslist update to match github has removed the need for this pseudoselector'
    }
  ],
  '16.0.0': [
    {
      selectors: [
        '.btn-blue',
        '.btn-blue:focus',
        '.btn-blue.focus',
        '.btn-blue:hover',
        '.btn-blue.hover',
        '.btn-blue:active',
        '.btn-blue.selected',
        '.btn-blue[aria-selected=true]',
        '[open]>.btn-blue',
        '.btn-blue:disabled',
        '.btn-blue.disabled',
        '.btn-blue[aria-disabled=true]',
        '.btn-blue .Counter',
        '.markdown-body li',
        '.input-dark',
        '.input-dark:-ms-input-placeholder',
        '.input-dark::-ms-input-placeholder',
        '.input-dark::placeholder',
        '.input-dark.focus',
        '.input-dark:focus',
        '::-ms-input-placeholder',
        '.border-blue',
        '.border-blue-light',
        '.border-green',
        '.border-green-light',
        '.border-red',
        '.border-red-light',
        '.border-purple',
        '.border-yellow',
        '.border-gray-light',
        '.border-gray-dark',
        '.border-black-fade',
        '.border-white-fade',
        '.border-white-fade-15',
        '.border-white-fade-30',
        '.border-white-fade-50',
        '.border-white-fade-70',
        '.border-white-fade-85',
        '.box-shadow',
        '.box-shadow-medium',
        '.box-shadow-large',
        '.box-shadow-extra-large',
        '.bg-white',
        '.bg-blue',
        '.bg-blue-light',
        '.bg-gray-dark',
        '.bg-gray',
        '.bg-gray-light',
        '.bg-green',
        '.bg-green-light',
        '.bg-red',
        '.bg-red-light',
        '.bg-yellow',
        '.bg-yellow-light',
        '.bg-yellow-dark',
        '.bg-purple',
        '.bg-pink',
        '.bg-purple-light',
        '.bg-orange',
        '.color-gray-0',
        '.bg-gray-0',
        '.color-gray-1',
        '.bg-gray-1',
        '.color-gray-2',
        '.bg-gray-2',
        '.color-gray-3',
        '.bg-gray-3',
        '.color-gray-4',
        '.bg-gray-4',
        '.color-gray-5',
        '.bg-gray-5',
        '.color-gray-6',
        '.bg-gray-6',
        '.color-gray-7',
        '.bg-gray-7',
        '.color-gray-8',
        '.bg-gray-8',
        '.color-gray-9',
        '.bg-gray-9',
        '.color-blue-0',
        '.bg-blue-0',
        '.color-blue-1',
        '.bg-blue-1',
        '.color-blue-2',
        '.bg-blue-2',
        '.color-blue-3',
        '.bg-blue-3',
        '.color-blue-4',
        '.bg-blue-4',
        '.color-blue-5',
        '.bg-blue-5',
        '.color-blue-6',
        '.bg-blue-6',
        '.color-blue-7',
        '.bg-blue-7',
        '.color-blue-8',
        '.bg-blue-8',
        '.color-blue-9',
        '.bg-blue-9',
        '.color-green-0',
        '.bg-green-0',
        '.color-green-1',
        '.bg-green-1',
        '.color-green-2',
        '.bg-green-2',
        '.color-green-3',
        '.bg-green-3',
        '.color-green-4',
        '.bg-green-4',
        '.color-green-5',
        '.bg-green-5',
        '.color-green-6',
        '.bg-green-6',
        '.color-green-7',
        '.bg-green-7',
        '.color-green-8',
        '.bg-green-8',
        '.color-green-9',
        '.bg-green-9',
        '.color-yellow-0',
        '.bg-yellow-0',
        '.color-yellow-1',
        '.bg-yellow-1',
        '.color-yellow-2',
        '.bg-yellow-2',
        '.color-yellow-3',
        '.bg-yellow-3',
        '.color-yellow-4',
        '.bg-yellow-4',
        '.color-yellow-5',
        '.bg-yellow-5',
        '.color-yellow-6',
        '.bg-yellow-6',
        '.color-yellow-7',
        '.bg-yellow-7',
        '.color-yellow-8',
        '.bg-yellow-8',
        '.color-yellow-9',
        '.bg-yellow-9',
        '.color-orange-0',
        '.bg-orange-0',
        '.color-orange-1',
        '.bg-orange-1',
        '.color-orange-2',
        '.bg-orange-2',
        '.color-orange-3',
        '.bg-orange-3',
        '.color-orange-4',
        '.bg-orange-4',
        '.color-orange-5',
        '.bg-orange-5',
        '.color-orange-6',
        '.bg-orange-6',
        '.color-orange-7',
        '.bg-orange-7',
        '.color-orange-8',
        '.bg-orange-8',
        '.color-orange-9',
        '.bg-orange-9',
        '.color-red-0',
        '.bg-red-0',
        '.color-red-1',
        '.bg-red-1',
        '.color-red-2',
        '.bg-red-2',
        '.color-red-3',
        '.bg-red-3',
        '.color-red-4',
        '.bg-red-4',
        '.color-red-5',
        '.bg-red-5',
        '.color-red-6',
        '.bg-red-6',
        '.color-red-7',
        '.bg-red-7',
        '.color-red-8',
        '.bg-red-8',
        '.color-red-9',
        '.bg-red-9',
        '.color-purple-0',
        '.bg-purple-0',
        '.color-purple-1',
        '.bg-purple-1',
        '.color-purple-2',
        '.bg-purple-2',
        '.color-purple-3',
        '.bg-purple-3',
        '.color-purple-4',
        '.bg-purple-4',
        '.color-purple-5',
        '.bg-purple-5',
        '.color-purple-6',
        '.bg-purple-6',
        '.color-purple-7',
        '.bg-purple-7',
        '.color-purple-8',
        '.bg-purple-8',
        '.color-purple-9',
        '.bg-purple-9',
        '.color-pink-0',
        '.bg-pink-0',
        '.color-pink-1',
        '.bg-pink-1',
        '.color-pink-2',
        '.bg-pink-2',
        '.color-pink-3',
        '.bg-pink-3',
        '.color-pink-4',
        '.bg-pink-4',
        '.color-pink-5',
        '.bg-pink-5',
        '.color-pink-6',
        '.bg-pink-6',
        '.color-pink-7',
        '.bg-pink-7',
        '.color-pink-8',
        '.bg-pink-8',
        '.color-pink-9',
        '.bg-pink-9',
        '.text-blue',
        '.text-red',
        '.text-gray-light',
        '.text-gray',
        '.text-gray-dark',
        '.text-green',
        '.text-yellow',
        '.text-orange',
        '.text-orange-light',
        '.text-purple',
        '.text-pink',
        '.text-white',
        '.link-gray',
        '.link-gray:hover',
        '.link-gray-dark',
        '.link-gray-dark:hover',
        '.link-hover-blue:hover',
        '.muted-link',
        '.muted-link:hover',
        '.text-shadow-dark',
        '.text-shadow-light',
        '.dropdown-menu-dark',
        '.dropdown-menu-dark::before',
        '.dropdown-menu-dark::after',
        '.dropdown-menu-dark .dropdown-header',
        '.dropdown-menu-dark .dropdown-divider',
        '.dropdown-menu-dark .dropdown-item',
        '.dropdown-menu-dark.dropdown-menu-w::before',
        '.dropdown-menu-dark.dropdown-menu-w::after',
        '.dropdown-menu-dark.dropdown-menu-e::before',
        '.dropdown-menu-dark.dropdown-menu-e::after',
        '.dropdown-menu-dark.dropdown-menu-ne::before',
        '.dropdown-menu-dark.dropdown-menu-ne::after',
        '.Label--outline',
        '.Label--gray',
        '.Label--gray-darker',
        '.Label--yellow',
        '.Label--orange',
        '.Label--red',
        '.Label--outline-green',
        '.Label--green',
        '.Label--blue',
        '.Label--purple',
        '.Label--pink',
        '.State--green',
        '.State--red',
        '.State--purple',
        '.Counter--gray-light',
        '.Counter--gray',
        '.btn-transparent:active'
      ],
      message: `This selector is not available in Primer CSS 16.0.0. Please refer to the documentation.`
    },
    {
      variables: [
        '$bg-black',
        '$bg-black-fade',
        '$bg-blue',
        '$bg-blue-light',
        '$bg-diffstat-added',
        '$bg-diffstat-deleted',
        '$bg-diffstat-neutral',
        '$bg-gray',
        '$bg-gray-dark',
        '$bg-gray-light',
        '$bg-green',
        '$bg-green-light',
        '$bg-orange',
        '$bg-pink',
        '$bg-purple',
        '$bg-purple-light',
        '$bg-red',
        '$bg-red-light',
        '$bg-white',
        '$bg-yellow',
        '$bg-yellow-dark',
        '$bg-yellow-light',
        '$black',
        '$black-fade-15',
        '$black-fade-30',
        '$black-fade-50',
        '$black-fade-70',
        '$black-fade-85',
        '$blue',
        '$blue-000',
        '$blue-100',
        '$blue-200',
        '$blue-300',
        '$blue-400',
        '$blue-500',
        '$blue-600',
        '$blue-700',
        '$blue-800',
        '$blue-900',
        '$border-black-fade',
        '$border-blue',
        '$border-blue-light',
        '$border-color',
        '$border-color-button',
        '$border-gray',
        '$border-gray-dark',
        '$border-gray-darker',
        '$border-gray-light',
        '$border-green',
        '$border-green-light',
        '$border-purple',
        '$border-red',
        '$border-red-light',
        '$border-white',
        '$border-white-fade',
        '$border-yellow',
        '$box-shadow',
        '$box-shadow-extra-large',
        '$box-shadow-focus',
        '$box-shadow-highlight',
        '$box-shadow-inset',
        '$box-shadow-large',
        '$box-shadow-medium',
        '$btn-active-shadow',
        '$btn-input-focus-shadow',
        '$form-control-shadow',
        '$gray',
        '$gray-000',
        '$gray-100',
        '$gray-200',
        '$gray-300',
        '$gray-400',
        '$gray-500',
        '$gray-600',
        '$gray-700',
        '$gray-800',
        '$gray-900',
        '$gray-dark',
        '$gray-light',
        '$green',
        '$green-000',
        '$green-100',
        '$green-200',
        '$green-300',
        '$green-400',
        '$green-500',
        '$green-600',
        '$green-700',
        '$green-800',
        '$green-900',
        '$orange',
        '$orange-000',
        '$orange-100',
        '$orange-200',
        '$orange-300',
        '$orange-400',
        '$orange-500',
        '$orange-600',
        '$orange-700',
        '$orange-800',
        '$orange-900',
        '$pink-000',
        '$pink-100',
        '$pink-200',
        '$pink-300',
        '$pink-400',
        '$pink-500',
        '$pink-600',
        '$pink-700',
        '$pink-800',
        '$pink-900',
        '$purple',
        '$purple-000',
        '$purple-100',
        '$purple-200',
        '$purple-300',
        '$purple-400',
        '$purple-500',
        '$purple-600',
        '$purple-700',
        '$purple-800',
        '$purple-900',
        '$red',
        '$red-000',
        '$red-100',
        '$red-200',
        '$red-300',
        '$red-400',
        '$red-500',
        '$red-600',
        '$red-700',
        '$red-800',
        '$red-900',
        '$text-black',
        '$text-blue',
        '$text-gray',
        '$text-gray-dark',
        '$text-gray-light',
        '$text-green',
        '$text-orange',
        '$text-orange-light',
        '$text-pink',
        '$text-purple',
        '$text-red',
        '$text-white',
        '$text-yellow',
        '$tooltip-background-color',
        '$tooltip-text-color',
        '$white',
        '$white-fade-15',
        '$white-fade-30',
        '$white-fade-50',
        '$white-fade-70',
        '$white-fade-85',
        '$yellow',
        '$yellow-000',
        '$yellow-100',
        '$yellow-200',
        '$yellow-300',
        '$yellow-400',
        '$yellow-500',
        '$yellow-600',
        '$yellow-700',
        '$yellow-800',
        '$yellow-900',
        '$blue-mktg',
        '$green-mktg'
      ],
      message: `This variable is not available in Primer CSS 16.0.0. Please refer to the documentation.`
    }
  ],
  '15.0.0': [
    {
      selectors: [
        '.btn-outline:active .Counter',
        '.btn-outline.selected .Counter',
        '.btn-outline[aria-selected=true] .Counter',
        '.tabnav .Counter',
        '.SideNav-item:hover::before',
        '.SideNav-item:focus::before',
        '.UnderlineNav-item:hover .UnderlineNav-octicon',
        '.UnderlineNav-item:focus .UnderlineNav-octicon',
        '.UnderlineNav--right .UnderlineNav-item',
        '.pagination::before',
        '.pagination::after',
        '.pagination a:first-child',
        '.pagination span:first-child',
        '.pagination em:first-child',
        '.pagination a:last-child',
        '.pagination span:last-child',
        '.pagination em:last-child',
        '.pagination .selected',
        '.IssueLabel--big .g-emoji',
        '.IssueLabel--big:hover',
        '.SelectMenu-item[aria-checked="true"]',
        '.SelectMenu-item[aria-checked="true"] .SelectMenu-icon--check',
        '.SelectMenu-tab:not([aria-checked="true"]):hover',
        '.SelectMenu-tab:not([aria-checked="true"]):active',
        '.SelectMenu-tab:not([aria-selected="true"]):hover'
      ],
      message: `This selector is not available in Primer CSS 15.0.0. Please refer to the documentation.`
    }
  ],
  '14.4.0': [
    {
      selectors: [
        '.breadcrumb-item[aria-current]',
        '.breadcrumb-item[aria-current]::after',
        '.menu-item[aria-current]',
        '.menu-item[aria-current]::before',
        '.tabnav-tab[aria-current]',
        '.filter-item[aria-current]',
        '.SideNav-item[aria-current="page"]',
        '.SideNav-item[aria-current="page"]::before',
        '.SideNav-subItem[aria-current="page"]',
        '.subnav-item[aria-current]',
        '.UnderlineNav-item[aria-current]',
        '.UnderlineNav-item[aria-current] .UnderlineNav-octicon',
        '.pagination [aria-current]',
        '.pagination [aria-current]:hover'
      ],
      message: `These selectors are not needed anymore.`
    }
  ],
  '14.0.0': [
    {
      selectors: [
        '.SelectMenu-item+.SelectMenu-item',
        '.SelectMenu-divider:first-child',
        '.SelectMenu-divider:last-child',
        '.SelectMenu--hasFilter .SelectMenu-item:last-child',
        '.SelectMenu-item[aria-checked="true"] .SelectMenu-icon'
      ],
      message: `These selectors are deprecated and not used anymore.`
    },
    {
      selectors: [
        '.flex-item-equal',
        '.flex-sm-item-equal',
        '.flex-md-item-equal',
        '.flex-lg-item-equal',
        '.flex-xl-item-equal'
      ],
      message: `This variable is deprecated. Use "flex-1" instead.`
    },
    {
      selectors: ['.UnderlineNav-item.selected', '.UnderlineNav-item.selected .UnderlineNav-octicon'],
      message: `Please use aria-selected="true" to indicate the selected state of an UnderlineNav item.`
    },
    {
      variables: ['$status-pending'],
      message: `This variable is deprecated.`
    },
    {
      variables: ['$highlight-yellow'],
      message: `This variable is deprecated.`
    },
    {
      variables: ['$repo-private-text', '$repo-private-bg', '$repo-private-icon'],
      message: `These variables are deprecated.`
    },
    {
      variables: ['$marketingSpacers', '$allSpacers'],
      message: `Please use the $marketing-spacers and $marketing-all-spacers variables.`
    },
    {
      variables: ['$exploregrid-item-border-radius'],
      message: `This variable is deprecated. Use "4px" instead.`
    },
    {
      variables: ['$stats-switcher-py', '$stats-viewport-height'],
      message: `These variables are deprecated.`
    },
    {
      variables: ['$min_tab_size', '$max_tab_size'],
      message: `These variables are deprecated.`
    }
  ],
  '13.0.0': [
    {
      selectors: [
        '.btn-purple',
        '.btn-purple:focus',
        '.btn-purple.focus',
        '.btn-purple:hover',
        '.btn-purple.hover',
        '.btn-purple:active',
        '.btn-purple.selected',
        '[open]>.btn-purple',
        '.btn-purple:disabled',
        '.btn-purple.disabled',
        '.btn-purple .Counter'
      ],
      message: `Please don't make purple buttons.`
    },
    {
      selectors: ['.text-pending'],
      message: `Please use the "text-yellow" class instead of "text-pending".`
    },
    {
      selectors: ['.bg-pending'],
      message: `Please use the "bg-yellow-dark" class instead of "bg-pending".`
    },
    {
      selectors: [
        '.container',
        '.container::before',
        '.container::after',
        '.columns',
        '.columns::before',
        '.columns::after',
        '.column',
        '.one-third',
        '.two-thirds',
        '.one-fourth',
        '.one-half',
        '.three-fourths',
        '.one-fifth',
        '.four-fifths'
      ],
      message: `Please use [grid classes](https://primer.style/css/objects/grid).`
    },
    {
      selectors: ['.centered'],
      message: `You can use the "mx-auto" class to center any element.`
    },
    {
      selectors: [
        '.dropdown-menu-content',
        '.dropdown.active .dropdown-menu-content',
        '.dropdown-menu-content.anim-scale-in'
      ],
      message: `The "dropdown-menu-content" class is unnecessary.`
    }
  ]
}

const {version: CURRENT_VERSION} = require('./package.json')
const semver = require('semver')

// map selectors to the version and message of their deprecation
const selectorDeprecations = new Map()
const variableDeprecations = new Map()
for (const [version, deps] of Object.entries(versionDeprecations)) {
  for (const {selectors = [], variables = [], message} of deps) {
    for (const selector of selectors) {
      selectorDeprecations.set(selector, {version, message})
    }
    for (const variable of variables) {
      variableDeprecations.set(variable, {version, message})
    }
  }
}

function isSelectorDeprecated(selector, version = CURRENT_VERSION) {
  const deprecation = selectorDeprecations.get(selector)
  return deprecation ? semver.gte(deprecation.version, version) : false
}

function isVariableDeprecated(variable, version = CURRENT_VERSION) {
  const deprecation = variableDeprecations.get(variable)
  return deprecation ? semver.gte(deprecation.version, version) : false
}

module.exports = {
  versionDeprecations,
  selectorDeprecations,
  variableDeprecations,
  isSelectorDeprecated,
  isVariableDeprecated
}
