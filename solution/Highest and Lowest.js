const highAndLow = numbers => numbers.split(' ').sort((a, b) => a - b)[numbers.split(' ').length - 1] + ' ' + numbers.split(' ').sort((a, b) => a - b)[0]