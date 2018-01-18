
import SideNavi from '../SideNavi/SideNavi.vue';
import MainContent from '../MainContent/MainContent.vue';

export default {
  name: "Base",
  components: {
    'MainContent': MainContent,
    'SideNavi': SideNavi
  },
  data() {
    return {
      msg: "Base"
    };
  }
};