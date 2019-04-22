import * as Actions from '../constants/posts';

const initState = {
  selected: {},
  objects: [
    {
      id: 0,
      title: 'Has banksy been in walsall? This picture suggests he may have',
      text: '<p>Did the infamous artist pay a visit to the Black Country? These pictures suggest he may have done and left his mark on a secluded spot in Walsall Wood.</p>\n' +
        '<p>Photographer, James Bourne captured the iconic image while wandering down Coppice Lane. He spotted the work of art on the side of a building set to be demolished to make way for a new set of flats.</p>\n' +
        '<p>The 28-year-old suspects the painting would have gone up at some point within the last two weeks.</p>\n' +
        '<p>Depicting a young boy holding a cap and dressed in the Victorian attire commonly associated with chimney sweeps, the melancholic expression reminded James of the saying, \'a penny for your thoughts\'.</p>\n' +
        '<p>Banksy is an anonymous street-based artist and political activist. Believed to be from Bristol, his graffiti is laced with satirical undertones and dark humour in a unique stenciling style.</p>\n' +
        '<img style="float: right" alt="Banksy? Artwork found in Walsall Wood" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBVtD41.img?h=800&amp;w=1200&amp;m=6&amp;q=60&amp;o=f&amp;l=f">' +
        '<small class="image-author">James Bourne Banksy? Artwork found in Walsall Wood</small>\n' +
        '<p>Free things to do in Walsall with the family or for days out</p>\n' +
        '<p>Mr Bourne told Black Country Live : "I was taken aback but how much detail had gone into it. I knew of Banksy\'s work so I Googled it and compared it and it looked liked one of his pieces.</p>\n' +
        '<p>"It\'s quite a secluded spot, I found it around 10am in the morning."</p>\n' +
        '<p>In his spare time, James likes to take photos of old buildings in his area before they are knocked down - that\'s how he stumbled across this.</p>\n' +
        '<p>He added: "The first time I spotted it i didn\'t have my camera with me so came back a few days later and two words in graffiti had been added either side."</p>\n' +
        '<p>Last year, Walsall Council\'s planning committee gave the thumbs up for plans to convert Sunnyside Farm (near Coppice Lane) into 62 new homes.</p>\n' +
        '<p>The land had been deemed an eyesore by local business owners anc councillors who welcomed the plans.</p>\n' +
        '<p>The photographer from Walsall said: "It\'s a shame that it\'s going to disappear. It\'s mad because you\'ll probably never see it again. Where it is, I bet only a couple of people would have seen it because it\'s a bit of a secluded spot. Now it is going to be knocked down I doubt anyone will preserve it. Once they knock it down, that\'s it. It\'s gone."</p>\n' +
        '<img alt="Was Banksy in West Bromwich?" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBVtphv.img?h=800&amp;w=1200&amp;m=6&amp;q=60&amp;o=f&amp;l=f">' +
        '<small class="image-author">Ben Smith Was Banksy in West Bromwich?</small>\n' +
        '<p>Free things to do in Sandwell with the family or for days out &nbsp;</p>\n' +
        '<p>It\'s not the only alleged sighting of Banksy\'s work in the Black Country . Another eager-eyed art enthusiast thinks they may have spotted a piece in West Bromwich.</p>\n' +
        '<p>Ben Smith took to Facebook to ask: "Does anybody know if this is a Banksy? Found it down a secluded side street in West Brom by the hospital."</p>\n' +
        '<p>The image shows two mice dressed in dinner suits in the same stencil style that has become synonymous with Banksy\'s work.</p>\n' +
        '<p>Black Country Live newsletter: Daily news direct to your email inbox</p>\n' +
        '<p>RSPCA rushes to rescue salamander - and gets a furry surprise &nbsp;</p>'
    }
  ]
};

export default function PostsReducer(state = initState, action) {
  switch (action.type) {
    case Actions.GET_POST_BY_ID:
      return {...state, selected: state.objects.filter(post => post.id === parseInt(action.id))[0]};
    default:
      return state;
  }
}