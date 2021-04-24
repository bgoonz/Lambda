import LazyWrapper from './_LazyWrapper';
import arrayPush from './_arrayPush';
import arrayReduce from './_arrayReduce';

/**
 * The base implementation of `wrapperValue` which returns the result of
 * performing a sequence of actions on the unwrapped `value`, where each
 * successive action is supplied the return value of the previous.
 *
 * @private
 * @param {*} value The unwrapped value.
 * @param {Array} actions Actions to perform to resolve the unwrapped value.
 * @returns {*} Returns the resolved value.
 */
function baseWrapperValue(value, actions) {
  let result = value;
  if (result instanceof LazyWrapper) {
    result = result.value();
  }
  return arrayReduce(actions, (result, {func, thisArg, args}) => {
    return func.apply(thisArg, arrayPush([result], args));
  }, result);
}

export default baseWrapperValue;
