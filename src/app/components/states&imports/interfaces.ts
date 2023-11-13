import { StaticImageData } from "next/image";

export interface EnemyInterfaceProps {
    enemyClass: string;
    enemyHP: number;
    initialHP: number;
    enemyAttack: number;
    enemyImage: StaticImageData; 
    enemyIndex?: any;
  }

export interface Enemy {
  enemyClass: string;
  enemyHP: number;
  initialHP: number;
  enemyAttack: number;
  name: string;
}