// DNAStrand ("ATTGC") // return "TAACG"
// DNAStrand ("GTAT") // return "CATA" 

const DNAStrand = (str) => {
    let check = (letter) => {
        switch (letter) {
            case 'A':
                return 'T'
                break;
            case 'T':
                return 'A'
                break;
            case 'C':
                return 'G'
                break;
            case 'G':
                return 'C'
                break;
        }
        return letter
    }
    return [...str].map(letter => check(letter)).join("");
}

console.log(DNAStrand('ATTGC')) // returns TAACG