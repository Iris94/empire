import { StaticImageData } from "next/image";

export interface EnemyInterfaceProps {
    enemyClass: string;
    enemyHP: number;
    enemyPoints: number;
    enemyImage: StaticImageData; 
    enemyIndex?: number;
  }