function towerOfHanoi(numberOfDesk, fromCore, toCore, usingCore) {
  if(numberOfDesk === 1) {
    console.log(`Move disk 1 from ${fromCore} to ${toCore}`);
    return;
  }
  towerOfHanoi(numberOfDesk-1, fromCore, usingCore, toCore)
  console.log(`Move disk ${numberOfDesk} from ${fromCore} to ${toCore}`)
  towerOfHanoi(numberOfDesk-1, usingCore, toCore, fromCore)
}

towerOfHanoi(3, 'a', 'c', 'b');



