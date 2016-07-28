define(['./_baseFindIndex', './_baseIteratee', './toInteger'], function(baseFindIndex, baseIteratee, toInteger) {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max,
      nativeMin = Math.min;

  /**
   * This method is like `_.findIndex` except that it iterates over elements
   * of `collection` from right to left.
   *
   * @static
   * @memberOf _
   * @since 2.0.0
   * @category Array
   * @param {Array} array The array to search.
   * @param {Function} [predicate=_.identity]
   *  The function invoked per iteration.
   * @param {number} [fromIndex=array.length-1] The index to search from.
   * @returns {number} Returns the index of the found element, else `-1`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'active': true },
   *   { 'user': 'fred',    'active': false },
   *   { 'user': 'pebbles', 'active': false }
   * ];
   *
   * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
   * // => 2
   *
   * // The `_.matches` iteratee shorthand.
   * _.findLastIndex(users, { 'user': 'barney', 'active': true });
   * // => 0
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.findLastIndex(users, ['active', false]);
   * // => 2
   *
   * // The `_.property` iteratee shorthand.
   * _.findLastIndex(users, 'active');
   * // => 0
   */
  function findLastIndex(array, predicate, fromIndex) {
    var length = array ? array.length : 0;
    if (!length) {
      return -1;
    }
    var index = length - 1;
    if (fromIndex !== undefined) {
      index = toInteger(fromIndex);
      index = fromIndex < 0
        ? nativeMax(length + index, 0)
        : nativeMin(index, length - 1);
    }
    return baseFindIndex(array, baseIteratee(predicate, 3), index, true);
  }

  return findLastIndex;
});