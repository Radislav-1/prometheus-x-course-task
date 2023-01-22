/**

 (moveUp - вверх, moveDown - вниз, moveLeft - ліворуч, moveRight - праворуч).


  * функція moveUnitToFirstPoint повинна перемістити юніт з початкової точки (5, 5) в точку (8, 9);

  * функція moveUnitToSecondPoint повинна перемістити юніт з попередньої точки (8, 9) в точку (2, 1);

Примітка №1: (x, y). x - значення по вертикалі, y - значення по горизонталі.

  Примітка №2: якщо юніт виходить за поле (значення перевишує 10, або зменшується нижче 1) він з'являється з іншого боку.
 Наприклад, при значенні 10 по горизонталі та рухаючись праворуч на один крок, значення буде 1, а не 11.

Примітка №3: методи переміщення можуть бути викликані в ланцюжку (unit.moveUp().moveUp().moveLeft()).
**/

export function moveUnitToFirstPoint(unit) {
  // ========== Початок зони редагування ===============
  unit.moveRight().moveRight().moveRight().moveUp().moveUp().moveUp().moveUp();
  // ========== Кінець зони редагування ===============

  return {
    x: unit.getValueX,
    y: unit.getValueY
  };
}

export function moveUnitToSecondPoint(unit) {
  // ========== Початок зони редагування ===============
  unit.moveRight().moveRight().moveRight().moveRight().moveUp().moveUp();
  // ========== Кінець зони редагування ===============
  return {
    x: unit.getValueX,
    y: unit.getValueY
  };
}
