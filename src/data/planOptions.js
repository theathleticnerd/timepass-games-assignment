import arcadeIcon from 'src/assets/icons/arcade.svg';
import advancedIcon from 'src/assets/icons/advanced.svg';
import proIcon from 'src/assets/icons/pro.svg';
const plans = [
    {
        id: 201,
        icon: arcadeIcon,
        name: 'Arcade',
        monthlyCost: 9,
        annualCost: 90
    },
    {
        id: 202,
        icon: advancedIcon,
        name: 'Advanced',
        monthlyCost: 12,
        annualCost: 120
    },
    {
        id: 203,
        icon: proIcon,
        name: 'Pro',
        monthlyCost: 15,
        annualCost: 150
    }
];
export default plans