import { StaticImageData } from "next/image";

export interface EnemyInterfaceProps {
    enemyClass: string;
    enemyHP: number;
    initialHP: number;
    enemyAttack: number;
    enemyImage: StaticImageData; 
    enemyIndex?: any;
    enemyArmor: number;
  }

export interface Enemy {
  enemyClass: string;
  enemyHP: number;
  initialHP: number;
  enemyAttack: number;
  name: string;
  enemyArmor: number
}