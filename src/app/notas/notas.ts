
import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Nota {
  id: number;
  aluno: string;
  disciplina: string;
  nota1: number;
  nota2: number;
}

@Component({
  selector: 'app-notas',
  imports: [FormsModule, DecimalPipe],
  templateUrl: './notas.html',
  styleUrl: './notas.css'
})
export class Notas {
  registro = {
    aluno: '',
    disciplina: '',
    nota1: null as number | null,
    nota2: null as number | null
  };

  notas: Nota[] = [];
  proximoId = 1;

  cadastrarNota(): void {
    const { aluno, disciplina, nota1, nota2 } = this.registro;

    if (
      !aluno.trim() ||
      !disciplina.trim() ||
      nota1 === null ||
      nota2 === null ||
      nota1 < 0 ||
      nota1 > 10 ||
      nota2 < 0 ||
      nota2 > 10
    ) {
      return;
    }

    this.notas.push({
      id: this.proximoId++,
      aluno: aluno.trim(),
      disciplina: disciplina.trim(),
      nota1,
      nota2
    });

    this.registro = {
      aluno: '',
      disciplina: '',
      nota1: null,
      nota2: null
    };
  }

  calcularMedia(nota: Nota): number {
    return (nota.nota1 + nota.nota2) / 2;
  }

  excluirNota(id: number): void {
    this.notas = this.notas.filter(nota => nota.id !== id);
  }
}
