(() => {
  'use strict';
  window.ALSGradeRouting = Object.freeze({
    systemFor(grade) {
      const level = Number(grade);
      if (level === 3) return 'ale';
      if (level >= 9 && level <= 12) return 'als';
      return null;
    },
    destinationFor(grade, destinations) {
      const system = this.systemFor(grade);
      if (system === 'ale') return destinations?.grade3 || '';
      if (system === 'als') return destinations?.highSchool || '';
      return '';
    }
  });
})();
