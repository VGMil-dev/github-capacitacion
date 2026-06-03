// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Capacitación GitHub: Técnico Salesiano',
			sidebar: [
				{
					label: 'Comenzando desde cero',
					items: [
						{ label: 'Etapa 1: Git sin miedo', slug: 'introduccion' },
						{ label: 'Etapa 2: Primeros pasos con Git', slug: 'git-esencial' },
						{ label: 'Etapa 3: Conociendo GitHub', slug: 'github-basico' },
						{ label: 'Etapa 4: Práctica guiada', slug: 'practica-guiada' },
					],
				},
				{
					label: 'Aplicándolo en clase',
					items: [
						{ label: 'Etapa 5: Camino del estudiante', slug: 'fase-1-estudiante' },
						{ label: 'Etapa 6: Camino del profesor', slug: 'fase-2-profesor' },
					],
				},
				{
					label: 'Cuando ya dominas lo básico',
					items: [
						{ label: 'Apoyo: GitHub Education y Classroom', slug: 'fase-3-github-education' },
						{ label: 'Más adelante: Proyectos y auditoría', slug: 'marco-avanzado' },
					],
				},
			],
		}),
	],
});
