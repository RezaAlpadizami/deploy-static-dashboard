<script setup>
defineProps({
  show: Boolean,
});
</script>

<template>
  <Transition name="modal">
    <div v-show="show" class="modal-mask">
      <div class="modal-container">
        <div>
          <slot></slot>
        </div>
        <footer class="modal-footer">
          <slot name="footer">
            <button @click="$emit('close')">Close</button>
          </slot>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-mask {
    inset: 0;
    position: fixed;
    background: rgba(0, 0, 0, .6);
    display: grid;
    place-items: center;
}

.modal-container {
    background: white;
    padding: 1rem;
    width: 80vw;
    max-width: 500px;
    border-radius: 8px;
}

.modal-footer {
    border-top: 1px solid #ddd;
    margin-top: 1rem;
    padding-top: 0.5rem;
    font-size: 0.8rem;
}

.modal-footer button {
    background: #ddd;
    padding: .25rem .75rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

.modal-footer button:hover {
    background: #c8c8c8;
}

.modal-enter-active, .modal-leave-active {
    transition: opacity 1s;
}

.modal-enter-from, .modal-leave-to {
    opacity: 0;
}

.modal-enter-to, .modal-leave-from {
    opacity: 100;
}

</style>
