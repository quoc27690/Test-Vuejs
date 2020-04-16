<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3 text-center">
        <h1>Transition</h1>
        <!-- Cơ bản -->
        <button
          class="btn btn-block btn-warning"
          @click="casePrimary = !casePrimary"
        >Trường hợp cơ bản</button>
        <br />
        <!-- Nếu dùng v-show khi bấm ẩn sẽ ko bị xóa mà chỉ thêm vào thuộc tính style="display: none" -->
        <transition name="fade">
          <div class="alert alert-success" v-show="casePrimary">Trường hợp cơ bản - fade</div>
        </transition>
        <transition name="slide">
          <div class="alert alert-warning" v-if="casePrimary">Trường hợp cơ bản - slide</div>
        </transition>
        <!-- Thêm hiệu ứng appear để khi xuất hiện lần đầu khi mở trang web nó sẽ kích hoạt hiệu ứng -->
        <transition name="slide" appear>
          <div class="alert alert-warning" v-if="casePrimary">Trường hợp cơ bản - slide (appear)</div>
        </transition>
        <hr />

        <!-- Lọc dữ liệu cách 1 (kết hợp với package animate.css) -->
        <select class="form-control mb-3" v-model="typeAnimationEnter">
          <option value="animated zoomInLeft">zoomInLeft</option>
          <option value="animated zoomInRight">zoomInRight</option>
          <option value="animated zoomInUp">zoomInUp</option>
        </select>
        <select class="form-control mb-3" v-model="typeAnimationLeave">
          <option value="animated rollOut">rollOut</option>
          <option value="animated slideOutLeft">slideOutLeft</option>
          <option value="animated bounceOutRight">bounceOutRight</option>
        </select>
        <button
          class="btn btn-block btn-success"
          @click="showC1 = !showC1"
        >Chọn kiểu animation Cách 1</button>
        <br />
        <transition
          enter-class
          :enter-active-class="typeAnimationEnter"
          leave-class
          :leave-active-class="typeAnimationLeave"
        >
          <div class="alert alert-warning" v-if="showC1">Chọn kiểu animation Cách 1</div>
        </transition>
        <hr />

        <!-- Lọc dữ liệu cách 2 (Không dùng package) -->
        <select class="form-control mb-3" v-model="typeAnimationC2">
          <option value="fade">fade</option>
          <option value="slide">slide</option>
        </select>
        <button class="btn btn-block btn-info" @click="showC2 = !showC2">Chọn kiểu animation Cách 2</button>
        <br />
        <transition :name="typeAnimationC2">
          <div class="alert alert-success" v-show="showC2">Chọn kiểu animation Cách 2</div>
        </transition>
        <hr />

        <!-- Sử dụng gói package animate.css -->
        <button
          class="btn btn-block btn-primary"
          @click="casePakage = !casePakage"
        >Sử dụng gói package animate.css</button>
        <br />
        <transition
          enter-class
          enter-active-class="animated rotateInUpLeft"
          leave-class
          leave-active-class="animated rotateOutDownRight"
        >
          <div class="alert alert-warning" v-if="casePakage">Sử dụng gói package animate.css</div>
        </transition>
        <hr />

        <!-- Trường hợp dùng nhiều element:
        1. thêm thuộc tính key để có hiệu ứng
        2. thêm thuộc tính mode='out-in' để chuyển đổi mượt hơn (kết thúc cái này rồi mới hiện cái kia)
        -->
        <button
          class="btn btn-block btn-info"
          @click="caseElements = !caseElements"
        >Trường hợp dùng nhiều element</button>
        <br />
        <transition
          enter-class
          :enter-active-class="typeAnimationEnter"
          leave-class
          :leave-active-class="typeAnimationLeave"
          mode="out-in"
        >
          <div class="alert alert-warning" v-if="caseElements" key="1">Trường hợp dùng nhiều element</div>
          <div class="alert alert-success" v-else key="2">Trường hợp dùng nhiều element</div>
        </transition>
        <hr />

        <!-- Javascript animation -->
        <button class="btn btn-block btn-warning" @click="casejs = !casejs">Javascript animation</button>
        <br />
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
        >
          <div style="width: 0px; height: 100px; background: aquamarine" v-if="casejs"></div>
        </transition>
        <hr />

        <!-- Làm việc với component -->
        <button
          class="btn btn-block btn-primary"
          @click="selectComponent === 'Success' ? selectComponent = 'Danger' : selectComponent = 'Success'"
        >Làm việc với component</button>
        <br />
        <transition name="fade" mode="out-in">
          <!-- :is nghĩa là tên gì thì hiện ra tên đó -->
          <component :is="selectComponent"></component>
        </transition>
        <hr />

        <!-- Transition group -->
        <h3>Transition group</h3>
        <input type="text" class="form-control" v-model="textInput" />
        <br />
        <button class="btn btn-block btn-danger" @click="addItem">Add Item</button>

        <ul class="list-group">
          <!-- Nếu dùng transition sẽ ko show hết được các element -->
          <transition-group name="fade">
            <li
              class="list-group-item"
              v-for="(number,index) in numbers"
              :key="number"
              style="cursor: pointer"
              @click="removeItem(index)"
            >{{number}}</li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Danger from "./components/Danger";
import Success from "./components/Success";
export default {
  data() {
    return {
      showC1: false,
      showC2: false,
      typeAnimationEnter: "animated zoomInLeft",
      typeAnimationLeave: "animated rollOut",
      typeAnimationC2: "fade",
      casejs: false,
      caseElements: false,
      casePakage: false,
      casePrimary: false,
      elementWidth: 0,
      selectComponent: "Success",
      numbers: ["1", "2", "3", "4", "5", "6"],
      textInput: ""
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter");
      this.elementWidth = 0;
    },
    enter(el, done) {
      console.log("enter");
      let point = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth + point * 10 + "px";
        point++;
        if (point > 30) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log("afterEnter");
    },
    enterCancelled(el) {
      console.log("enterCancelled");
    },

    beforeLeave(el) {
      console.log("beforeLeave");
      this.elementWidth = 300;
    },
    leave(el, done) {
      console.log("leave");
      let point = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth - point * 10 + "px";
        point++;
        if (point > 30) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log("afterLeave");
    },
    leaveCancelled(el) {
      console.log("leaveCancelled");
    },

    // transition group
    addItem() {
      if (this.numbers.includes(this.textInput)) {
        return false;
      } else if (this.textInput === "") {
        return false;
      } else {
        this.numbers.unshift(this.textInput);
        this.textInput = "";
      }
    },
    removeItem(index) {
      return this.numbers.splice(index, 1);
    }
  },
  components: {
    Danger,
    Success
  }
};
</script>

<style scoped>
/* -----fade----- */
/* enter */
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
/* leave */
.fade-leave {
  /* opacity: 1; */
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

/* -----slide----- */
/* enter */
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  transition: opacity 1s;
  animation: slide-in 1s ease-out;
}
/* leave */
.slide-leave {
}
.slide-leave-active {
  transition: opacity 1s;
  opacity: 0;
  animation: slide-out 1s ease-out;
}
/* key frames */
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0px);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
