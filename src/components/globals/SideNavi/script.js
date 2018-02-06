import ShuffleText from 'shuffle-text';

export default {
  name: 'SideNavi',
  data() {
    return {
    };
  },
  methods:{
    shuffleStart:function(event,str){
      let text = new ShuffleText(event.currentTarget);
      text.start();
      text.setText(str);
    }
  }
};

