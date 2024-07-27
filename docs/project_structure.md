# Project Structure

This readme is documentation about Project Structure used in this project.

```
├── apis (services)
│   ├── (domain-name)
│        index.ts
├── assets
│   ├── icons
│   ├── images
│   └── locales
├── components
│   ├── inputs
│   ├── modals
│   ├── buttons
│   ├── tables
│   └── layouts
│   index.ts
├── configs
│   theme.ts
│   routeNames.ts
│   queryKeys.ts
│   index.ts
├── hooks
│   index.ts
├── libs
│   ├── axios
│   ├── react-query
│   ├── firebase
│   ├── aws-s3
│   └── google
│    index.ts
├── pages(screens)
│   └── (page-name)
│       ├── components
│       └── hooks
│   index.ts
├── routers(navigators)
│   └── routes
│       index.ts
│   index.ts
├── store
│   └── (store-name)
│   index.ts
├── types
│   └── api
│       declarations.d.ts
│   globals.d.ts
└── utils
    index.ts
    helper.ts
    parser.ts
    crypto.ts
```

## Detail Explanation

### 1) apis(services)
I use apis folder name. We can also use services folder name for that. The purpose is to place network layer integrations that is not related directly with UI layer and can be consumed via hooks from pages or components.

### 2) assets
The purpose is to place static resources related to project like images, icons, localizations and so on.

### 3) components
The purpose is to place global reusable components that will share across many pages, screens and other components. Components may vary depend on use cases like layouts, modals, inputs & so on.

### 4) configs
The purpose is to place configuration values related to project that my be constants for project or loading differently from environments. It includes
themes, cache keys, service tokens, route names and so on.

### 5) hooks
The purpose is to place reusable hooks that will share across many pages, screens, components and other hooks. The difference between utils and hooks is hooks may have side effects for consumers.

### 6) libs
The purpose is to place third-parties library integration like firebase, aws, axios and so on. The libraries are required to instantiate and configure for more specifications.

### 7) pages(screens)
The purpose is to place page level components depend on domain.

### 8) routers(navigators)
The purpose is to place routers (navigators) and routing related datas.

### 9) store
The purpose is to place store and reducers depend on domain.

### 10) types
The purpose is to place custom type declartion globally or type augmentation for third-parties modules.

### 11) utils
The purpose is to place pure utility functions like parsers, date-time formaters and so on.
