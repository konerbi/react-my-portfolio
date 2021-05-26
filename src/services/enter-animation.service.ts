export class EnterAnimationService {
	private static animTimeout: number;

	static startAnimationOnEnter(stateSetter: any, timeout?:number):void {
		this.animTimeout = setTimeout(this.startAnim, timeout ? timeout : 100, stateSetter, true);
	}
	static startAnim(stateSetter: any, flag: boolean):void {
		clearTimeout(this.animTimeout);
		stateSetter(flag);
	}

	static clearAnim():void {
		clearTimeout(this.animTimeout);
	}
}
