
import SideNavi from '../SideNavi/SideNavi.vue';

export default {
  name: "Base",
  components: {
    'SideNavi': SideNavi
  },
  data() {
    return {
      msg: "Base"
    };
  }
};