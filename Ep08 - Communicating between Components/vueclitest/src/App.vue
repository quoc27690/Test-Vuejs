<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <User-comp/>
            </div>
        </div>
    </div>
</template>

<script>
import User from './components/User';

export default {
  components: {
    'User-comp': User,
  }
}
</script>
<style></style>
