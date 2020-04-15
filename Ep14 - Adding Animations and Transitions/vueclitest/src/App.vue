<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3 text-center">
        <h1>Transition</h1>
        <!-- Lọc dữ liệu -->
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

        <button class="btn btn-block btn-success" @click="show = !show">Show - Hide</button>
        <hr />

        <!-- Lọc dữ liệu -->
        <!-- <transition :name="typeAnimation">
          <div class="alert alert-success" v-show="show">A simple primary alert—check it out!</div>
        </transition>-->
        <!-- <transition
          enter-class
          :enter-active-class="typeAnimationEnter"
          leave-class
          :leave-active-class="typeAnimationLeave"
        >
          <div class="alert alert-warning" v-if="show">A simple primary alert—check it out!</div>
        </transition>-->

        <!-- Nếu dùng v-show khi bấm ẩn sẽ ko bị xóa mà chỉ thêm vào thuộc tính style="display: none" -->
        <!-- <transition name="fade">
          <div class="alert alert-success" v-show="show">A simple primary alert—check it out!</div>
        </transition>
        <transition name="slide">
          <div class="alert alert-warning" v-if="show">A simple primary alert—check it out!</div>
        </transition>-->

        <!-- Thêm hiệu ứng appear để khi xuất hiện lần đầu khi mở trang web nó sẽ kích hoạt hiệu ứng -->
        <!-- <transition name="slide" appear>
          <div class="alert alert-warning" v-if="show">A simple primary alert—check it out!</div>
        </transition>-->

        <!-- Sử dụng gói package animate.css -->
        <!-- <transition
          enter-class
          enter-active-class="animated rotateInUpLeft"
          leave-class
          leave-active-class="animated rotateOutDownRight"
        >
          <div class="alert alert-warning" v-if="show">A simple primary alert—check it out!</div>
        </transition>-->

        <!-- Trường hợp dùng nhiều element:
        1. thêm thuộc tính key để có hiệu ứng
        2. thêm thuộc tính mode='out-in' để chuyển đổi mượt hơn (kết thúc cái này rồi mới hiện cái kia)
        -->
        <transition
          enter-class
          :enter-active-class="typeAnimationEnter"
          leave-class
          :leave-active-class="typeAnimationLeave"
          mode="out-in"
        >
          <div class="alert alert-warning" v-if="show" key="1">A simple warning alert—check it out!</div>
          <div class="alert alert-success" v-else key="2">A simple success alert—check it out!</div>
        </transition>

        <!-- Javascript animation -->
        <button class="btn btn-block btn-warning" @click="status = !status">Show - Hide</button>
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
          <div style="width: 0px; height: 100px; background: aquamarine" v-if="status"></div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      typeAnimationEnter: "animated zoomInLeft",
      typeAnimationLeave: "animated rollOut",
      status: false,
      elementWidth: 0
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
    }
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
