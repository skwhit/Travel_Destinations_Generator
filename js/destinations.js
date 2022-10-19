class Destination {
  constructor(location, state, image, imageLink, map, flight, hotel) {
    this.location = location;
    this.state = state;
    this.image = image;
    this.imageLink = imageLink;
    this.map = map;
    this.flight = flight;
    this.hotel = hotel;
  }
}

const yosemite = new Destination(
  "Yosemite",
  "CA",
  "./img/yosemite.jpg",
  "https://images.unsplash.com/photo-1553615730-76985f2a7be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d403237.0377976669!2d-119.83129148234035!3d37.853519395838326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8096f09df58aecc5%3A0x2d249c2ced8003fe!2sYosemite%20National%20Park!5e0!3m2!1sen!2sus!4v1666042709016!5m2!1sen!2sus"
);
const newYork = new Destination(
  "New York",
  "NY",
  "./img/newYork.jpg",
  "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1666042837405!5m2!1sen!2sus"
);
const grandCanyon = new Destination(
  "Grand Canyon",
  "AZ",
  "./img/grandCanyon.jpg",
  "https://images.unsplash.com/photo-1456425712190-0dd8c2b00156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12894.967700709018!2d-112.13042346065255!3d36.09977860096016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80cc0654bd27e08d%3A0xb1c2554442d42e8d!2sGrand%20Canyon!5e0!3m2!1sen!2sus!4v1666043095630!5m2!1sen!2sus"
);
const yellowstone = new Destination(
  "Yellowstone",
  "WY",
  "./img/yellowstone.jpg",
  "https://images.unsplash.com/photo-1570470276043-874a41ad9b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d727441.4536062161!2d-111.07446693126899!3d44.5854031891837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5351e55555555555%3A0xaca8f930348fe1bb!2sYellowstone%20National%20Park!5e0!3m2!1sen!2sus!4v1666043170875!5m2!1sen!2sus"
);
const maui = new Destination(
  "Maui",
  "HI",
  "./img/maui.jpg",
  "https://images.unsplash.com/photo-1542259009477-d625272157b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238701.0556259967!2d-156.47806712901678!3d20.803259854912376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x79552b4acc4c61dd%3A0xcc43e741dc113e7f!2sMaui!5e0!3m2!1sen!2sus!4v1666043238908!5m2!1sen!2sus"
);
const glacier = new Destination(
  "Glacier National Park",
  "MT",
  "./img/glacier.jpg",
  "https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1259&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d337326.7144875636!2d-114.12603134769756!3d48.66026266074626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5368901555555555%3A0xaf16bc2215c55dec!2sGlacier%20National%20Park!5e0!3m2!1sen!2sus!4v1666043335976!5m2!1sen!2sus"
);
const zion = new Destination(
  "Zion National Park",
  "UT",
  "./img/zion.jpg",
  "https://images.unsplash.com/flagged/photo-1565896209840-a18b89dd65d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203062.66488636666!2d-113.18331824036805!3d37.322282621843236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80caead08844f8d9%3A0x7c2e3a15aa3656f5!2sZion%20National%20Park!5e0!3m2!1sen!2sus!4v1666043464713!5m2!1sen!2sus"
);
const honolulu = new Destination(
  "Honolulu-Oahu",
  "HI",
  "./img/honolulu.jpg",
  "https://images.unsplash.com/photo-1507876466758-bc54f384809c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1209&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118930.09540488938!2d-157.86911306128448!3d21.328179205881316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c00183b8cc3464d%3A0x4b28f55ff3a7976c!2sHonolulu%2C%20HI!5e0!3m2!1sen!2sus!4v1666043508052!5m2!1sen!2sus"
);
const grandTeton = new Destination(
  "Grand Teton National Park",
  "WY",
  "./img/grandTeton.jpg",
  "https://images.unsplash.com/photo-1545394734-b4140a8cfa9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d368998.74158611987!2d-110.84412580450415!3d43.735426038893685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5352519ec95d1ba9%3A0xa5a0b88ecc91a337!2sGrand%20Teton%20National%20Park!5e0!3m2!1sen!2sus!4v1666043564186!5m2!1sen!2sus"
);
const sanFran = new Destination(
  "San Francisco",
  "CA",
  "./img/sanFran.jpg",
  "https://images.unsplash.com/photo-1534050359320-02900022671e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.07476442086!2d-122.47261939249664!3d37.757694819086126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1666155603656!5m2!1sen!2sus"
);
const tahoe = new Destination(
  "Lake Tahoe",
  "NV",
  "./img/tahoe.jpg",
  "https://images.unsplash.com/photo-1543377421-03f43286dc66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198181.90350045258!2d-120.18505182721273!3d39.092984716163215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809978a1b91f1151%3A0x8c3f1fafeeafb520!2sLake%20Tahoe!5e0!3m2!1sen!2sus!4v1666043666716!5m2!1sen!2sus"
);
const moab = new Destination(
  "Moab",
  "UT",
  "./img/moab.jpg",
  "https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24953.88197038036!2d-109.56892812782112!3d38.574430197168425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8747e1e59ab82d8d%3A0xb32b17af1d5c42d!2sMoab%2C%20UT%2084532!5e0!3m2!1sen!2sus!4v1666043714217!5m2!1sen!2sus"
);
const sanDiego = new Destination(
  "San Diego",
  "CA",
  "./img/sanDiego.jpg",
  "https://images.unsplash.com/photo-1519954352454-2d5a7353e277?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429154.758481513!2d-117.389161835228!3d32.82481751515258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9530fad921e4b%3A0xd3a21fdfd15df79!2sSan%20Diego%2C%20CA!5e0!3m2!1sen!2sus!4v1666043855359!5m2!1sen!2sus"
);
const washingtonDC = new Destination(
  "Washington",
  "D.C.",
  "./img/washingtonDC.jpg",
  "https://images.unsplash.com/photo-1554745007-103d4d5e078c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99370.14184000282!2d-77.08461571047151!3d38.893867189236545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC!5e0!3m2!1sen!2sus!4v1666043900430!5m2!1sen!2sus"
);
const barHarbor = new Destination(
  "Bar Harbor",
  "ME",
  "./img/barHarbor.jpg",
  "https://images.unsplash.com/photo-1539848266534-d3db2060e877?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91284.3971421837!2d-68.34033107887866!3d44.35849928828038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4caebe4815802593%3A0x88e91a6528cad91b!2sBar%20Harbor%2C%20ME!5e0!3m2!1sen!2sus!4v1666043933289!5m2!1sen!2sus"
);
const newOrleans = new Destination(
  "New Orleans",
  "LA",
  "./img/newOrleans.jpg",
  "https://images.unsplash.com/photo-1635352934507-cd4ad73275c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221064.11608238588!2d-90.02264733114917!3d30.03321949243913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a454b2118265%3A0xdb065be85e22d3b4!2sNew%20Orleans%2C%20LA!5e0!3m2!1sen!2sus!4v1666043959997!5m2!1sen!2sus"
);
const chicago = new Destination(
  "Chicago",
  "IL",
  "./img/chicago.jpg",
  "https://images.unsplash.com/photo-1597933534024-debb6104af15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190255.33858260693!2d-87.87204681033981!3d41.83390366656982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1666042608314!5m2!1sen!2sus"
);
const olympic = new Destination(
  "Olympic National Park",
  "WA",
  "./img/olympic.jpg",
  "https://images.unsplash.com/photo-1516572882656-dc5249697fc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d343145.71103653574!2d-124.21443599637963!3d47.78482448910345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548e8009cf0472d1%3A0x2087abb27d7951!2sOlympic%20National%20Park!5e0!3m2!1sen!2sus!4v1666044030196!5m2!1sen!2sus"
);
const boston = new Destination(
  "Boston",
  "MA",
  "./img/boston.jpg",
  "https://images.unsplash.com/photo-1491249149628-28cb9a16356a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94410.11617846483!2d-71.04032363003518!3d42.314455579676796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2sBoston%2C%20MA!5e0!3m2!1sen!2sus!4v1666044069713!5m2!1sen!2sus"
);
const bigSur = new Destination(
  "Big Sur",
  "CA",
  "./img/bigSur.jpg",
  "https://images.unsplash.com/photo-1581790059834-8c317f59448a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205708.5347554337!2d-121.95826257837778!3d36.33180281267154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808de8a7780e4d77%3A0x37e8d859caefac61!2sBig%20Sur%2C%20CA!5e0!3m2!1sen!2sus!4v1666044107388!5m2!1sen!2sus"
);
const aspen = new Destination(
  "Aspen",
  "CO",
  "./img/aspen.jpg",
  "https://images.unsplash.com/photo-1579889551683-2e5d22deb230?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24735.63640875122!2d-106.83672459999998!3d39.19848145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8740397cf7413c7d%3A0xc12b42dc782cf672!2sAspen%2C%20CO%2081611!5e0!3m2!1sen!2sus!4v1666041890098!5m2!1sen!2sus"
);
const sedona = new Destination(
  "Sedona",
  "AZ",
  "./img/sedona.jpg",
  "https://images.unsplash.com/photo-1583729476095-82e61108a043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1107&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52385.14587852875!2d-111.86689691340062!3d34.85442776352653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872da132f942b00d%3A0x5548c523fa6c8efd!2sSedona%2C%20AZ%2086336!5e0!3m2!1sen!2sus!4v1666044135731!5m2!1sen!2sus"
);
const telluride = new Destination(
  "Telluride",
  "CO",
  "./img/telluride.jpg",
  "https://images.unsplash.com/photo-1541169477997-6ed649539ec4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25171.999210237595!2d-107.8532721286711!3d37.94211204732081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x873ed87b70e6f473%3A0x38ee772171bae3e1!2sTelluride%2C%20CO%2081435!5e0!3m2!1sen!2sus!4v1666044177254!5m2!1sen!2sus"
);
const savannah = new Destination(
  "Savannah",
  "GA",
  "./img/savannah.jpg",
  "https://images.unsplash.com/photo-1597199813662-c1f22fee941c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216455.40963099553!2d-81.34036223194335!3d32.039057538089345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fb75fc78f20659%3A0x4e0c6751036020bc!2sSavannah%2C%20GA!5e0!3m2!1sen!2sus!4v1666044208163!5m2!1sen!2sus"
);
const outerBanks = new Destination(
  "Outer Banks",
  "NC",
  "./img/outerBanks.jpg",
  "https://images.unsplash.com/photo-1627609639736-4aecd08bdcb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415899.4527906351!2d-76.18737208557646!3d35.47423696392706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a45b3ca7736c71%3A0x1b77116175d236b3!2sOuter%20Banks!5e0!3m2!1sen!2sus!4v1666044293946!5m2!1sen!2sus"
);
const seattle = new Destination(
  "Seattle",
  "WA",
  "./img/seattle.jpg",
  "https://images.unsplash.com/photo-1438401171849-74ac270044ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172138.65427083964!2d-122.4821467437339!3d47.61317464021942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1666044328882!5m2!1sen!2sus"
);
const miami = new Destination(
  "Miami",
  "FL",
  "./img/miami.jpg",
  "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.38943828894!2d-80.29949840380873!3d25.782545310804675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1666044352919!5m2!1sen!2sus"
);
const lasVegas = new Destination(
  "Las Vegas",
  "NV",
  "./img/lasVegas.jpg",
  "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206252.72147271104!2d-115.31508339643749!3d36.125195780533076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV!5e0!3m2!1sen!2sus!4v1666044377431!5m2!1sen!2sus"
);

const destin = new Destination(
  "Destin",
  "FL",
  "./img/destin.jpg",
  "https://images.unsplash.com/photo-1616984366240-479bd31d60ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27530.67212563612!2d-86.47400753766881!3d30.398263848302165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88914379c940f4b7%3A0x17a48bdb46584c32!2sDestin%2C%20FL%2032541!5e0!3m2!1sen!2sus!4v1666044431169!5m2!1sen!2sus"
);
const nashville = new Destination(
  "Nashville",
  "TN",
  "./img/nashville.jpg",
  "https://images.unsplash.com/photo-1545419913-775e3e82c7db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206090.64634138317!2d-86.92532884106032!3d36.186836006626066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864ec3213eb903d%3A0x7d3fb9d0a1e9daa0!2sNashville%2C%20TN!5e0!3m2!1sen!2sus!4v1666044463807!5m2!1sen!2sus"
);

export const destinationsArr = [
  yosemite,
  newYork,
  grandCanyon,
  yellowstone,
  maui,
  glacier,
  zion,
  honolulu,
  grandTeton,
  sanFran,
  tahoe,
  moab,
  sanDiego,
  washingtonDC,
  barHarbor,
  newOrleans,
  chicago,
  olympic,
  boston,
  bigSur,
  aspen,
  sedona,
  telluride,
  savannah,
  outerBanks,
  seattle,
  miami,
  lasVegas,
  destin,
  nashville,
];
