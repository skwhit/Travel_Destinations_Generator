class Destination {
    constructor(location, state, source) {
        this.location = location;
        this.state = state;
        this.image = source;
    }
}

const yosemite = new Destination('Yosemite','CA','https://images.unsplash.com/photo-1553615730-76985f2a7be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80');
const newYork = new Destination('New York','NY','https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80');
const grandCanyon = new Destination('Grand Canyon','AZ','https://images.unsplash.com/photo-1456425712190-0dd8c2b00156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
const yellowstone = new Destination('Yellowstone','WY','https://images.unsplash.com/photo-1570470276043-874a41ad9b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
const maui = new Destination('Maui','HI','https://images.unsplash.com/photo-1542259009477-d625272157b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80');
const glacier = new Destination('Glacier National Park','MT','https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1259&q=80');
const zion = new Destination('Zion National Park','UT','https://images.unsplash.com/flagged/photo-1565896209840-a18b89dd65d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80');
const honolulu = new Destination('Honolulu-Oahu','HI','https://images.unsplash.com/photo-1507876466758-bc54f384809c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1209&q=80');
const grandTeton = new Destination('Grand Teton National Park','WY','https://images.unsplash.com/photo-1545394734-b4140a8cfa9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
const sanFran = new Destination('San Francisco','CA','https://images.unsplash.com/photo-1516675302207-722c37ce2f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80');
const tahoe = new Destination('Lake Tahoe','NV','https://images.unsplash.com/photo-1599838057998-e68824b8f8c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
const moab = new Destination('Moab','UT','https://images.unsplash.com/photo-1543682388-4b46a14c91db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80');
const sanDiego = new Destination('San Diego','CA','https://images.unsplash.com/photo-1519954352454-2d5a7353e277?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80');
const washingtonDC = new Destination('Washington','D.C.','https://images.unsplash.com/photo-1554745007-103d4d5e078c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
const barHarbor = new Destination('Bar Harbor','ME','https://images.unsplash.com/photo-1539848266534-d3db2060e877?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80');
const newOrleans = new Destination('New Orleans','LA','https://images.unsplash.com/photo-1635352934507-cd4ad73275c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
const chicago = new Destination('Chicago','IL','https://images.unsplash.com/photo-1597933534024-debb6104af15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
const olympic = new Destination('Olympic National Park','WA','https://images.unsplash.com/photo-1516572882656-dc5249697fc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80');
const boston = new Destination('Boston','MA','https://images.unsplash.com/photo-1563840111261-8b096fb63b65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80');
const bigSur = new Destination('Big Sur','CA','https://images.unsplash.com/photo-1581790059834-8c317f59448a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80');
const aspen = new Destination('Aspen','CO','https://images.unsplash.com/photo-1579889551683-2e5d22deb230?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
const sedona = new Destination('Sedona','AZ','https://images.unsplash.com/photo-1583729476095-82e61108a043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1107&q=80');
const telluride = new Destination('Telluride','CO','https://images.unsplash.com/photo-1541169477997-6ed649539ec4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
const savannah = new Destination('Savannah','GA','https://images.unsplash.com/photo-1597199813662-c1f22fee941c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
const outerBanks = new Destination('Outer Banks','NC','https://images.unsplash.com/photo-1627609639736-4aecd08bdcb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80');
const seattle = new Destination('Seattle','WA','https://images.unsplash.com/photo-1438401171849-74ac270044ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80');
const miami = new Destination('Miami','FL','https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80');
const lasVegas = new Destination('Las Vegas','NV','https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
const gettysburg = new Destination('Gettysburg','Pennsylvania','https://images.unsplash.com/photo-1580742125012-c3f8fc5c2673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80');
const destin = new Destination('Destin','FL','https://images.unsplash.com/photo-1616984366240-479bd31d60ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80');
const nashville = new Destination('Nashville','TN','https://images.unsplash.com/photo-1545419913-775e3e82c7db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80');



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
    gettysburg,
    destin,
    nashville

]

