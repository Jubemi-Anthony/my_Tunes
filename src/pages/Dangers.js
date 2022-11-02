import Dangerlist from "../components/Dangerlist";

const DANGERS_LIST = [
    {
        id: 0,
        title: 'Random Emergency',
        image: 'https://img.icons8.com/fluency/2x/siren.png'
    },
    {
        id: 1,
        title: 'Robbery',
        image: 'https://img.icons8.com/external-filled-outline-wichaiwi/2x/external-robbery-gamefi-filled-outline-wichaiwi.png'
    },
    {
        id: 2,
        title: 'Rape',
        image: 'https://img.icons8.com/doodle/2x/sex-offender.png'
    },
    {
        id: 3,
        title: 'Abuse',
        image: 'https://img.icons8.com/color/2x/torture.png'
    },
    {
        id: 4,
        title: 'Domestic Violence',
        image: 'https://img.icons8.com/office/2x/stick-fighting.png'
    },
    {
        id: 5,
        title: 'Assault',
        image: 'https://img.icons8.com/color/2x/physical-abuse.png'
    },
    {
        id: 6,
        title: 'Gun Violence',
        image: 'https://img.icons8.com/color/2x/no-weapons.png'
    },
    {
        id: 7,
        title: 'Fire Outbreak',
        image: 'https://img.icons8.com/office/2x/fire-element.png'
    },
    {
        id: 8,
        title: 'Drowning',
        image: 'https://img.icons8.com/external-colours-bomsymbols-/2x/external-drowning-sign-symbols-colors-colours-bomsymbols-.png'
    },
    {
        id: 9,
        title: 'Car Accident',
        image: 'https://img.icons8.com/doodle/2x/car-crash.png'
    },
    {
        id: 10,
        title: 'Stroke',
        image: 'https://img.icons8.com/emoji/2x/person-in-motorized-wheelchair.png'
    },
    {
        id: 11,
        title: 'Choking',
        image: 'https://th.bing.com/th/id/OIP.mjgXNvMNfdAKNj5SzebEZAHaGM?w=217&h=181&c=7&r=0&o=5&pid=1.7'
    },
    {
        id: 12,
        title: 'Police Violence',
        image: 'https://img.icons8.com/fluency/2x/detain.png'
    },
    {
        id: 13,
        title: 'Kidnapping',
        image: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-coercion-politics-flaticons-lineal-color-flat-icons-2.png'
    },
    {
        id: 14,
        title: 'Theft',
        image: 'https://img.icons8.com/doodle/2x/car-theft.png'
    },
    {
        id: 15,
        title: 'Suicide',
        image: 'https://img.icons8.com/color/2x/suicide-full-body.png'
    },
    {
        id: 16,
        title: 'Poisoning',
        image: 'https://img.icons8.com/office/2x/poison-bottle.png'
    },
    {
        id: 17,
        title: 'Depression',
        image: 'https://th.bing.com/th/id/OIP.WC2Shwbh2XicC2jcUU9x0wHaKv?w=132&h=191&c=7&r=0&o=5&pid=1.7'
    },
    {
        id: 18,
        title: 'Memory Loss',
        image: 'https://img.icons8.com/color/2x/depression.png'
    },
    {
        id: 19,
        title: 'Animal Attack',
        image: 'https://img.icons8.com/color-glass/2x/lion-full-body.png'
    },
    {
        id: 20,
        title: 'Bodily Injury',
        image: 'https://img.icons8.com/office/2x/cast.png'
    },
    {
        id: 21,
        title: 'Drug Abuse',
        image: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-drug-addictions-flaticons-lineal-color-flat-icons.png'
    },
    {
        id: 22,
        title: 'Fighting',
        image: 'https://img.icons8.com/emoji/2x/men-wrestling.png'
    },
    {
        id: 23,
        title: 'Terrorist Attack',
        image: 'https://img.icons8.com/color/2x/obito-uchiha.png'
    },
    {
        id: 24,
        title: 'Road Blocked',
        image: 'https://img.icons8.com/fluency/2x/block.png'
    },
    {
        id: 25,
        title: 'Earthquake',
        image: 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/2x/external-earthquake-landscape-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png'
    },
    {
        id: 26,
        title: 'Tornado',
        image: 'https://img.icons8.com/fluency/2x/tornado.png'
    },
    {
        id: 27,
        title: 'Heat Wave',
        image: 'https://img.icons8.com/officel/2x/infrared.png'
    },
    {
        id: 28,
        title: 'Bomb Blast',
        image: 'https://img.icons8.com/arcade/2x/bomb.png'
    },
    {
        id: 29,
        title: 'Cardiac Arrest',
        image: 'https://img.icons8.com/doodle/2x/medical-heart.png'
    },
    {
        id: 30,
        title: 'Cyber Attack',
        image: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-cyber-attack-cyber-security-flaticons-lineal-color-flat-icons-4.png'
    },
    {
        id: 31,
        title: 'Plane Crash',
        image: 'https://img.icons8.com/officel/2x/fighter-jet.png'
    },
    {
        id: 32,
        title: 'Lost Person',
        image: 'https://img.icons8.com/clouds/2x/person-laying-down.png'
    },
    {
        id: 33,
        title: 'Bullying',
        image: 'https://img.icons8.com/color/2x/bully.png'
    },
    {
        id: 34,
        title: 'Molestation',
        image: 'https://img.icons8.com/color/2x/sex-offender.png'
    },
    {
        id: 35,
        title: 'Blind Person',
        image: 'https://img.icons8.com/officel/2x/visualy-impaired.png'
    },
    {
        id: 36,
        title: 'Paralysis',
        image: 'https://img.icons8.com/emoji/2x/person-in-motorized-wheelchair.png'
    },
    {
        id: 37,
        title: 'Bee Sting',
        image: 'https://img.icons8.com/fluency/2x/wasp.png'
    },
    {
        id: 38,
        title: 'Snake Bite',
        image: 'https://img.icons8.com/emoji/2x/snake-emoji.png'
    },
    {
        id: 39,
        title: 'Dog Bite',
        image: 'https://img.icons8.com/color/2x/bite.png'
    },
    {
        id: 40,
        title: 'Epilepsy',
        image: 'https://img.icons8.com/color-glass/2x/epilepsy-smart-watch.png'
    },
    {
        id: 41,
        title: 'Flood',
        image: 'https://img.icons8.com/external-wanicon-lineal-color-wanicon/2x/external-flood-climate-change-wanicon-lineal-color-wanicon.png'
    },
    {
        id: 42,
        title: 'Spiritual Attack',
        image: 'https://img.icons8.com/emoji/2x/ghost-emoji.png'
    },
    {
        id: 43,
        title: 'Stranded',
        image: 'https://img.icons8.com/external-parzival-1997-outline-color-parzival-1997/2x/external-gossip-bully-society-parzival-1997-outline-color-parzival-1997.png'
    },
    {
        id: 44,
        title: 'Ship Wreck',
        image: 'https://img.icons8.com/external-stickers-smashing-stocks/2x/external-Drowning-Boat-success-and-error-messages-stickers-smashing-stocks.png'
    },
    {
        id: 45,
        title: 'Gas Explosion',
        image: 'https://img.icons8.com/doodle/2x/explosion.png'
    },
    {
        id: 46,
        title: 'Electric Surge',
        image: 'https://img.icons8.com/emoji/2x/electric-plug.png'
    },
    {
        id: 47,
        title: 'Bone Fracture',
        image: 'https://ouch-cdn2.icons8.com/yDoxLM4XTjcR7w4c-22VtN-fEaRJn1rMLXFq2KFai7M/rs:fit:256:236/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjY1/LzQ2ODk3MWJiLWVh/ODEtNGNmZS05NGM2/LWE4OWEzZmZlNDQx/NC5zdmc.png'
    },
    {
        id: 48,
        title: 'Child Abuse',
        image: 'https://img.icons8.com/color/2x/abuse-skin-type-3.png'
    },
    {
        id: 49,
        title: 'Faint',
        image: 'https://img.icons8.com/color/344/faint.png'
    },
    {
        id: 50,
        title: 'Death',
        image: 'https://img.icons8.com/plasticine/2x/grim-reaper.png'
    },
    {
        id: 51,
        title: 'Missing Person',
        image: 'https://img.icons8.com/external-flaticons-flat-flat-icons/2x/external-missing-private-investigator-flaticons-flat-flat-icons.png'
    },
    {
        id: 52,
        title: 'Unsafe Childbirth',
        image: 'https://img.icons8.com/color-glass/2x/giving-birth.png'
    },
    {
        id: 53,
        title: 'Pregnancy Miscarriage',
        image: 'https://img.icons8.com/external-justicon-lineal-color-justicon/2x/external-pregnant-hospital-and-medical-justicon-lineal-color-justicon.png'
    },
    {
        id: 54,
        title: 'Drug Trafficking',
        image: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-drug-pharmaceutical-flaticons-lineal-color-flat-icons.png'
    },
    {
        id: 55,
        title: 'Radioactive Substance',
        image: 'https://img.icons8.com/emoji/2x/radioactive-emoji.png'
    },
    {
        id: 56,
        title: 'Oil Spillage',
        image: 'https://img.icons8.com/arcade/2x/oil-industry.png'
    },
    {
        id: 57,
        title: 'Suspicious Person',
        image: 'https://img.icons8.com/color/2x/leaning-against-wall.png'
    },
    {
        id: 58,
        title: 'Intruder',
        image: 'https://img.icons8.com/external-flaticons-flat-flat-icons/2x/external-motion-sensor-security-guard-flaticons-flat-flat-icons.png'
    },
    {
        id: 59,
        title: 'Dangerous Driving',
        image: 'https://img.icons8.com/color/2x/car-accident.png'
    },
    {
        id: 60,
        title: 'Concussion',
        image: 'https://img.icons8.com/external-filled-color-icons-papa-vector/2x/external-concussion-allergy-symptoms-color-filled-filled-color-icons-papa-vector.png'
    },
    {
        id: 61,
        title: 'Poisonous Gas',
        image: 'https://img.icons8.com/fluency/2x/gas-cylinders-hazard.png'
    },
    {
        id: 62,
        title: 'Acid Atttack',
        image: 'https://img.icons8.com/external-flaticons-flat-flat-icons/2x/external-acid-winery-flaticons-flat-flat-icons-2.png'
    },
]

function Danger(){
    return(
        <div className="danger">
            <p className="dangerText">Report a <span className="red">Crime</span> or an <span className="red">Emergency!</span> </p>
            <div>
                <Dangerlist items={DANGERS_LIST}/>
            </div>
        </div>
    )
}
export default Danger;

