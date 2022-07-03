# Todo with Zustand

2022-07-03

A simple to do list, so I can play with Zustand, vite, esbuild. In particular, I want to know how to test Zustand store. 

I found 2 main difficulties with compiling using esbuilde before testingin Jest: 
- Getting it to work with Typescript linting is a bit cumbersome
- Jest expect to hoist jest.mock before import. Any compiler used needs to be able to convert that to commonjs. esbuild-jest does not to do that by default.

I will look into Vitest as a replacement for Jest.