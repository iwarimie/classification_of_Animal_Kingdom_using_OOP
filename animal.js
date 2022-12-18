/*In the Classification of Animal Kingdom, Composition was used to depict Inheritance by creating functions that interacts with class*/

//invertebrate is another word for animal without backbone || vertebrate is another word for animal with backbone

function invertebrate({name}){
    return {
         no_backbone: () => console.log(`${name} has no backbone`)
    }
}

function vertebrate({name}){
    return {
         has_backbone: () => console.log(`${name} has backbone`)
    }
}

//aquatic is animal that lives in water || terrestial is animal that lives on land

function aquatic({name}){
    return {
         live_in_water: () => console.log(`${name} lives in water`)
    }
}

function terrestial({name}){
    return {
         live_on_land: () => console.log(`${name} lives on land`)
    }
}

//oviparous is animal that lay eggs || lactate is animals that breast feed
function oviparous({name}){
    return {
          lay_eggs: () => console.log(`${name} lay eggs to give birth`)
    }
}
function lactate({name}){
    return {
          breast_feed: () => console.log(`${name} breast-feed young ones`)
    }
}

//ectotherm is animal that body temperature is regulated by external environment || endotherm regulate its own body temp

function ectotherm({name}){
    return {
          cold_blooded: () => console.log(`${name} is cold-blooded`)
    }
}
function endotherm({name}){
    return {
          warm_blooded: () => console.log(`${name} is warm-blooded`)
    }
}

//Creating Template to Make Arthropods Object and passing relevant methods to it.

function ArthropodsCreator(name){
    const animal = { name: name}

    return {
        ...animal,
        ...invertebrate(animal),
        ...ectotherm(animal)
    }
}

//Creating Template to Make  Fish Object and passing relevant methods to it.
function FishCreator(name){
    const animal = { name: name}

    return {
        ...animal,
        ...vertebrate(animal),
        ...ectotherm(animal),
        ...oviparous(animal),
        ...aquatic(animal)
    }
}

//Creating Template to Make Amphibians and Reptiles Object and passing relevant methods to it.

function AmphibianAndReptilesCreator(name){
    const animal = { name: name}

    return {
        ...animal,
        ...vertebrate(animal),
        ...ectotherm(animal),
        ...oviparous(animal),
        ...aquatic(animal),
        ...terrestial(animal)
    }
}

//Creating Template to Make Aves(Birds) Object and passing relevant methods to it.

function AvesCreator(name){
    const animal = { name: name}

    return {
        ...animal,
        ...vertebrate(animal),
        ...endotherm(animal),
        ...oviparous(animal),
        ...terrestial(animal)
    }
}

//Creating Template to Make Mammals Object and passing relevant methods to it.
function MammalsCreator(name){
    const animal = { name: name}

    return {
        ...animal,
        ...vertebrate(animal),
        ...endotherm(animal),
        ...lactate(animal),
        ...terrestial(animal)
    }
}

console.log('Instantiaing the Arthropods Object and its features')

const arthropod = ArthropodsCreator('Animal')
//console.log(arthropod)
arthropod.no_backbone()
arthropod.cold_blooded()
console.log('\n')

console.log('Instantiaing the Fish Object and its features')
const fish = FishCreator('Animal')
//console.log(fish)
fish.has_backbone()
fish.cold_blooded()
fish.live_in_water()
fish.lay_eggs()
console.log('\n')

console.log('Instantiaing the Amphibian And Reptiles Object and its features')
const amphibian = AmphibianAndReptilesCreator('Animal')
//console.log(amphibian)
amphibian.has_backbone()
amphibian.cold_blooded()
amphibian.live_in_water()
amphibian.lay_eggs()
amphibian.live_on_land
console.log('\n')

console.log('Instantiaing the Bird Object and its features')
const bird = AvesCreator('Animal')
//console.log(bird)
bird.has_backbone()
bird.warm_blooded()
bird.live_on_land()
bird.lay_eggs()
console.log('\n')

console.log('Instantiaing the Human Object and its features')
const human_being = MammalsCreator('Animal')
//console.log(human_being)
human_being.has_backbone()
human_being.live_on_land()
human_being.breast_feed()
human_being.warm_blooded()


