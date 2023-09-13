<script setup>
import Modal from "./Modal.vue";
import { useAgendaStore } from "../store/AgendaStore";
import { useShoutStore } from "../store/ShoutStore";
import { ref, computed } from "vue";

const { type } = defineProps(["type"]);
let agenda = useAgendaStore();
let shout = useShoutStore();

const errorMessage = ref("");

console.log(shout.$state.newShout.length);

const clearErrorMessage = () => {
  errorMessage.value = "";
};

const toggleModal = () => {
  if (type === "shout") {
    shout.$state.showModalShout = true;
  } else if (type === "agenda") {
    agenda.$state.showModalAgenda = true;
  }
};

const handleCloseModal = () => {
  if (type === "shout") {
    shout.$state.showModalShout = false;
  } else if (type === "agenda") {
    agenda.$state.showModalAgenda = false;
  }
};

const addPost = (event) => {
  if (type === "shout") {
    if (shout.$state.newShout.length < 1) {
      event.preventDefault();
      return (errorMessage.value = "Note needs to be minimum 1 character");
    }
    const newShout = {
      id: Math.floor(Math.random() * 1000000),
      imgProfile: "like.svg",
      titleAnnouncement: shout.$state.newShout,
      name: "Eric Kambuaya",
    };
    shout.$state.shout.unshift(newShout);
    (shout.$state.newShout = ""), (shout.$state.showModalShout = false);
    event.preventDefault();
  } else if (type === "agenda") {
    if (agenda.$state.newAgenda.length < 1) {
      event.preventDefault();
      return (errorMessage.value = "Note needs to be minimum 1 character");
    }
    const newAgenda = {
      id: Math.floor(Math.random() * 1000000),
      title: agenda.$state.newAgenda,
      date: "Wed, 20 Aug, 11.00 AM - 12 AM",
    };
    agenda.$state.agenda.unshift(newAgenda);

    (agenda.$state.newAgenda = ""), (agenda.$state.showModalAgenda = false);
    event.preventDefault();
  }
};

const vModelValue = computed(() => {
  if (type === "shout") {
    return shout.$state.newShout;
  } else if (type === "agenda") {
    return agenda.$state.newAgenda;
  }
});

const updateVModelValue = (event) => {
  if (type === "shout") {
    shout.$state.newShout = event.target.value;
  } else if (type === "agenda") {
    agenda.$state.newAgenda = event.target.value;
  }
};
</script>

<template>
  <div
    class="flex flex-col justify-center align-middle cursor-pointer"
    @click="toggleModal"
  >
    <div class="flex gap-2">
      <p class="text-[10px] mt-1 font-semibold text-blue-700">
        {{ type === "shout" ? "Post Shout out" : "Add New" }}
      </p>

      <font-awesome-icon
        :icon="type === 'shout' ? ['fa', 'plus-circle'] : ['fa', 'calendar']"
        class="text-blue-500 rounded-full p-1"
      />
    </div>
  </div>

  <Teleport to="body">
    <Modal
      :show="
        type === 'shout'
          ? shout.$state.showModalShout
          : agenda.$state.showModalAgenda
      "
      @close="handleCloseModal"
    >
      <template #default>
        <p>{{ type === "shout" ? "Post Shout out" : "Add New Agenda" }}</p>
        <form class="form">
          <div class="wrapper-form-input">
            <textarea
              :value="vModelValue"
              @input="updateVModelValue"
              cols="30"
              rows="2"
              @focus="clearErrorMessage"
            >
            </textarea>
            <p class="error">{{ errorMessage }}</p>
            <button @click="addPost($event)" class="button-add">
              Add {{ type === "shout" ? "Post" : "New" }}
            </button>
          </div>
        </form>
      </template>
    </Modal>
  </Teleport>
</template>

<style scoped>
.button-note {
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: rgb(21, 20, 20);
  border-radius: 100%;
  color: white;
  font-size: 20px;
}

.button-add {
  border: none;
  padding: 10px;
  width: 60px;
  height: 50px;
  cursor: pointer;
  background-color: rgb(21, 20, 20);
  color: white;
  font-size: 20px;
}
.form {
  margin-top: 10px;
}

.wrapper-form-input {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
}
.wrapper-form-input button {
  width: 100%;
  height: 34px;
  border-radius: 10px;
  font-size: 12px !important;
}

textarea {
  flex: 1 1 0%;
  border: 1px solid rgb(215, 215, 215);
  border-radius: 12px;
  padding: 15px 10px;
  overflow: hidden;
}

.error {
  font-size: 12px;
  margin-top: -10px;
  margin-left: 8px;
  color: rgb(242, 136, 136);
}
</style>
