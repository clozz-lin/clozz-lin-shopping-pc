<template>
  <div>
    root
    {{ $store.state.a.username }}
    {{ $store.state.b.username }}
    {{ $store.getters.changeName }}
    {{ $store.getters['b/changeName'] }}
  </div>
</template>
