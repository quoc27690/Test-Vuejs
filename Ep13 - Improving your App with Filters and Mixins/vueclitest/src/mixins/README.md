# mixins :

- là 1 gói chứa các dữ liệu và hành động dùng chung!!!
- Nó tồn tại có đủ các vòng đời. mixins sẽ ưu tiên sử dụng trước trong 1 component. Thứ tự xuất hiện ( xem các console.log )
        + Create from global mixins
        + Create from newVue
        + Create from global mixins
        + Create from mixin!
        + Create from App!
        + Create from global mixins
        + Create from mixin!
        + Create from List!
- mixin là dùng chung nhưng nếu comp A cập nhật mixin, thì mixin sẽ ko chia sẽ cho comp B